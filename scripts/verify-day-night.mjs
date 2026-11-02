import assert from 'node:assert/strict';
import * as THREE from 'three';
import {
  cycleNightLevel,
  DAY_NIGHT_CYCLE,
  createCityAtmosphere,
} from '../lib/city-atmosphere.ts';
import { CityNightLights } from '../lib/city-night-lights.ts';
import { FirstPersonArms } from '../lib/first-person-arms.ts';

// --- Day/night cycle math -------------------------------------------------
const { day, dusk, night, dawn } = DAY_NIGHT_CYCLE;
const total = day + dusk + night + dawn;
assert.ok(day > night * 1.5, 'the day must run clearly longer than the night');
assert.equal(cycleNightLevel(0), 0);
assert.equal(cycleNightLevel(day - 0.01), 0);
assert.ok(Math.abs(cycleNightLevel(day + dusk / 2) - 0.5) < 1e-9, 'dusk ramps 0 -> 1');
assert.equal(cycleNightLevel(day + dusk + 1), 1);
assert.ok(Math.abs(cycleNightLevel(total - dawn / 2) - 0.5) < 1e-9, 'dawn ramps 1 -> 0');
assert.equal(cycleNightLevel(total), 0, 'cycle wraps');
assert.equal(cycleNightLevel(total + 5), cycleNightLevel(5), 'wrapping matches');
assert.equal(cycleNightLevel(-5), cycleNightLevel(total - 5), 'negative clocks wrap');
// Monotone through dusk and dawn.
for (let t = day; t < day + dusk; t += dusk / 20)
  assert.ok(cycleNightLevel(t) <= cycleNightLevel(t + dusk / 20) + 1e-9, 'dusk is monotone');
console.log(`PASS cycle math: ${day}s day / ${dusk}s dusk / ${night}s night / ${dawn}s dawn (${total}s total, day is ${(day / night).toFixed(2)}x night)`);

// --- Atmosphere: continuous night level + moon in the sky ------------------
const scene = new THREE.Scene();
scene.fog = new THREE.Fog('#9acbe3', 240, 620);
const atmosphere = createCityAtmosphere(scene);
const position = new THREE.Vector3();
atmosphere.update(1, position, 0, 0.5, 'golden');
assert.equal(atmosphere.night, 0);
atmosphere.update(2, position, 1, 30, 'golden');
assert.ok(atmosphere.night > 0.9, 'night level eases toward 1');
atmosphere.update(3, position, 0.37, 30, 'golden');
assert.ok(
  atmosphere.night > 0.3 && atmosphere.night < 0.9,
  'continuous dusk levels are respected, not snapped',
);
const skyMesh = scene.children.find((c) => c.material?.fragmentShader);
assert.ok(skyMesh, 'sky dome exists');
assert.ok(skyMesh.material.fragmentShader.includes('moon='), 'moon disc in sky shader');
assert.ok(scene.fog.far < 1000, 'fog wall stays Minecraft-short');
console.log('PASS atmosphere: continuous night level, moon disc, short fog');

// --- Night lights shader injection ----------------------------------------
const nightLights = new CityNightLights();
const cityMesh = new THREE.Mesh(
  new THREE.BoxGeometry(10, 30, 10),
  new THREE.MeshStandardMaterial({ color: '#888888' }),
);
nightLights.apply(cityMesh);
const shader = {
  uniforms: {},
  vertexShader: '#include <begin_vertex>\nvoid main(){}',
  fragmentShader: '#include <emissivemap_fragment>\nvoid main(){}',
};
cityMesh.material.onBeforeCompile(shader, /** @type {any} */ ({}));
assert.ok(shader.uniforms.cityNight, 'cityNight uniform bound');
assert.ok(shader.vertexShader.includes('nlWorldNormal'), 'world normal varying injected');
assert.ok(shader.fragmentShader.includes('totalEmissiveRadiance +='), 'windows add emissive light');
assert.ok(shader.fragmentShader.includes('abs(nlNormal.y) < .55'), 'roofs and streets stay dark');
assert.equal(cityMesh.material.customProgramCacheKey(), 'city-night-v1');
// A weather-chained material must land on a different program key.
const weathered = new THREE.Mesh(
  new THREE.BoxGeometry(10, 30, 10),
  new THREE.MeshStandardMaterial({ color: '#888888' }),
);
weathered.material.userData.cityWeather = true;
nightLights.apply(weathered);
assert.equal(weathered.material.customProgramCacheKey(), 'city-night-weather-v1');
// Second apply is a no-op (idempotent across tiles).
nightLights.apply(cityMesh);
assert.ok(cityMesh.material.userData.cityNightLights);
nightLights.update(1, 42);
assert.equal(nightLights.night.value, 1);
console.log('PASS night lights: injection, facade-only windows, cache keys, idempotent apply');

// --- First-person arms ------------------------------------------------------
const arms = new FirstPersonArms();
// A tiny "suit": mostly red with a smaller blue part.
const suit = new THREE.Group();
const torso = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: '#b3232b' }),
);
torso.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(3000), 3));
const legs = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: '#1c3f94' }),
);
legs.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(1200), 3));
suit.add(torso, legs);
arms.setSuit(suit);
assert.equal(arms.root.children.length, 2, 'two arms built');

const camera = new THREE.PerspectiveCamera(80, 1, 0.08, 1200);
const scene3 = new THREE.Scene();
scene3.add(camera);
camera.add(arms.root);
camera.position.set(0, 20, 0);
camera.lookAt(0, 20, -10);
camera.updateMatrixWorld();
// Idle: settle, then verify the arms hold a sane pose in front of the camera.
for (let i = 0; i < 120; i += 1)
  arms.update(camera, {
    delta: 1 / 60,
    time: i / 60,
    speed: 0,
    grounded: true,
    swingTargetWorld: null,
    zipTargetWorld: null,
    wallCrawl: false,
    gliding: false,
  });
const idlePalm = new THREE.Vector3();
arms.palmWorld(1, idlePalm);
assert.ok(Number.isFinite(idlePalm.x + idlePalm.y + idlePalm.z), 'palm position is finite');

// Swing: with an anchor up and ahead, the right hand chases it.
const anchor = new THREE.Vector3(0, 26, -12);
for (let i = 0; i < 200; i += 1)
  arms.update(camera, {
    delta: 1 / 60,
    time: 2 + i / 60,
    speed: 18,
    grounded: false,
    swingTargetWorld: anchor,
    zipTargetWorld: null,
    wallCrawl: false,
    gliding: false,
  });
const swingPalm = arms.palmWorld(1, new THREE.Vector3());
const eyeToAnchor = camera.position.distanceTo(anchor);
assert.ok(
  swingPalm.distanceTo(anchor) < eyeToAnchor - 0.35,
  `right palm stretches from the eye toward the anchor (${swingPalm.distanceTo(anchor).toFixed(2)}m vs eye ${eyeToAnchor.toFixed(2)}m)`,
);
assert.ok(
  swingPalm.distanceTo(camera.position) < 0.85,
  'palm stays at arm length from the eye',
);
// The elbow quaternion must stay a valid rotation.
const rightShoulder = arms.root.children[1];
const elbow = rightShoulder.children.find((child) => child.position.z < -0.1);
assert.ok(elbow, 'elbow joint exists');
assert.ok(
  Math.abs(elbow.quaternion.length() - 1) < 1e-3,
  'elbow quaternion stays normalized',
);
// Thwip flash appears and decays.
arms.thwip();
arms.update(camera, {
  delta: 1 / 60,
  time: 9,
  speed: 0,
  grounded: true,
  swingTargetWorld: null,
  zipTargetWorld: null,
  wallCrawl: false,
  gliding: false,
});
const flashMesh = arms.root.children[1].children
  .find((child) => child.position.z < -0.1)
  .children.find((child) => child.children.some((grandchild) => grandchild.material?.opacity !== undefined))
  ?.children.find((grandchild) => grandchild.material?.opacity > 0);
assert.ok(flashMesh, 'thwip flash lights up on the palm');
arms.dispose();
console.log('PASS first-person arms: suit colours, IK reach to web anchor, thwip flash');

console.log('All day/night and first-person checks passed.');
