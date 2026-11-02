import * as THREE from 'three';

/**
 * Night-time window lights for the whole city, injected into the existing
 * building materials. Windows are generated procedurally in the fragment
 * shader from world position, so every facade - streamed tiles and the
 * distant instanced skyline alike - lights up with warm and cool rooms as
 * the night level rises, without a single extra draw call.
 *
 * The injection chains onto whatever onBeforeCompile a material already has
 * (the weather system uses the same hook) and reuses one shared uniform pair
 * so every city material can share a single compiled program.
 */
export class CityNightLights {
  /** 0 by day, 1 by full night; driven from the atmosphere's damped level. */
  readonly night = { value: 0 };
  private readonly time = { value: 0 };

  private static readonly VERTEX_INJECTION = `#include <begin_vertex>
        vec3 nlNormalLocal = normal;
        vec4 nlPositionLocal = vec4(position, 1.);
        #ifdef USE_INSTANCING
          nlNormalLocal = mat3(instanceMatrix) * nlNormalLocal;
          nlPositionLocal = instanceMatrix * nlPositionLocal;
        #endif
        nlWorldNormal = normalize(mat3(modelMatrix) * nlNormalLocal);
        nlWorldPosition = (modelMatrix * nlPositionLocal).xyz;`;

  private static readonly FRAGMENT_INJECTION = `#include <emissivemap_fragment>
        {
          // Only vertical facades carry windows; roofs and street slabs stay
          // dark so the moonlight reads against them.
          vec3 nlNormal = normalize(nlWorldNormal);
          if (cityNight > .003 && abs(nlNormal.y) < .55) {
            vec2 nlFacade = abs(nlNormal.x) > abs(nlNormal.z)
              ? nlWorldPosition.zy
              : nlWorldPosition.xy;
            vec2 nlGrid = vec2(nlFacade.x * (1. / 3.05), nlFacade.y * (1. / 3.4));
            vec2 nlCell = floor(nlGrid);
            vec2 nlUv = fract(nlGrid);
            float nlPane = step(.16, nlUv.x) * (1. - step(.84, nlUv.x))
              * step(.22, nlUv.y) * (1. - step(.80, nlUv.y));
            if (nlPane > 0.) {
              // Rooms share a lit state per bay of columns per floor, then a
              // per-window variation decides which rooms in a lit bay are on.
              vec2 nlBay = vec2(floor(nlGrid.x * .25), nlCell.y);
              float nlBaySeed = fract(sin(dot(nlBay, vec2(127.1, 311.7))) * 43758.5453);
              float nlRoomSeed = fract(sin(dot(nlCell, vec2(269.5, 183.3))) * 43758.5453);
              float nlOn = step(.54, nlBaySeed) * step(.28, nlRoomSeed);
              // A few rooms breathe slowly, like people moving around inside.
              float nlBreathe = .82 + .18 * sin(cityNightTime * (.25 + nlRoomSeed * .5) + nlBaySeed * 39.);
              vec3 nlWarm = vec3(1., .72, .42);
              vec3 nlCool = vec3(.66, .80, 1.);
              vec3 nlTint = mix(nlWarm, nlCool, step(.78, nlRoomSeed));
              totalEmissiveRadiance += nlTint * (nlPane * nlOn * nlBreathe * 1.45 * cityNight);
            }
          }
        }`;

  apply(root: THREE.Object3D) {
    root.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];
      for (const material of materials) {
        if (!(material instanceof THREE.MeshStandardMaterial)) continue;
        if (material.userData.cityNightLights) continue;
        material.userData.cityNightLights = true;
        // Chain after the weather hook (apply() is always called after
        // weather.apply on the same roots) so both effects share one program.
        const chained = material.onBeforeCompile;
        material.onBeforeCompile = (shader, renderer) => {
          chained?.call(material, shader, renderer);
          shader.uniforms.cityNight = this.night;
          shader.uniforms.cityNightTime = this.time;
          shader.vertexShader =
            'varying vec3 nlWorldPosition;varying vec3 nlWorldNormal;\n' +
            shader.vertexShader;
          shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            CityNightLights.VERTEX_INJECTION,
          );
          shader.fragmentShader =
            'uniform float cityNight;uniform float cityNightTime;' +
            'varying vec3 nlWorldPosition;varying vec3 nlWorldNormal;\n' +
            shader.fragmentShader;
          shader.fragmentShader = shader.fragmentShader.replace(
            '#include <emissivemap_fragment>',
            CityNightLights.FRAGMENT_INJECTION,
          );
        };
        // Materials chained on the weather hook compile to a different program
        // than plain ones; the cache key must distinguish the two or three
        // would reuse whichever program it compiled first.
        material.customProgramCacheKey = () =>
          material.userData.cityWeather
            ? 'city-night-weather-v1'
            : 'city-night-v1';
        material.needsUpdate = true;
      }
    });
  }

  update(nightLevel: number, time: number) {
    this.night.value = THREE.MathUtils.clamp(
      Number.isFinite(nightLevel) ? nightLevel : 0,
      0,
      1,
    );
    this.time.value = Number.isFinite(time) ? time : 0;
  }
}
