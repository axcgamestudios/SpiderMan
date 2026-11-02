import * as THREE from 'three';

/**
 * First-person arms rig. Built from capsules and boxes, skinned to nothing,
 * parented to the camera and coloured from the currently equipped suit's own
 * materials so every suit shows its own arms. A small two-bone IK solver
 * points each hand at a per-mode target: the web anchor while swinging, the
 * wall while crawling, a running pump on the ground, and a relaxed guard
 * when idle. That is what makes first person read as Spider-Man rather than
 * a floating camera.
 */

const FORWARD = new THREE.Vector3(0, 0, -1);
const UPPER_LENGTH = 0.3;
const FORE_LENGTH = 0.29;
/** Perceptual RGB distance between two suit colours. */
const colorDistance = (a: THREE.Color, b: THREE.Color) =>
  Math.hypot(a.r - b.r, a.g - b.g, a.b - b.b);

type ArmChain = {
  side: number;
  shoulder: THREE.Group;
  elbow: THREE.Group;
  palm: THREE.Group;
  flash: THREE.Mesh;
  target: THREE.Vector3;
  pole: THREE.Vector3;
};

export type FirstPersonArmState = {
  delta: number;
  time: number;
  speed: number;
  grounded: boolean;
  /** World-space point the web is attached to, when swinging. */
  swingTargetWorld: THREE.Vector3 | null;
  /** World-space point being zipped toward, when aiming one. */
  zipTargetWorld: THREE.Vector3 | null;
  wallCrawl: boolean;
  gliding: boolean;
};

// Scratch objects: update() runs every frame and must not allocate.
const scratchDirection = new THREE.Vector3();
const scratchAxis = new THREE.Vector3();
const scratchUpper = new THREE.Vector3();
const scratchUpperAlt = new THREE.Vector3();
const scratchElbowWorld = new THREE.Vector3();
const scratchForearm = new THREE.Vector3();
const scratchLocal = new THREE.Vector3();
const scratchInverse = new THREE.Quaternion();
const scratchDesired = new THREE.Vector3();
const scratchPalmWorld = new THREE.Vector3();

export class FirstPersonArms {
  readonly root = new THREE.Group();
  private arms: ArmChain[] = [];
  private materials: THREE.MeshStandardMaterial[] = [];
  private runPhase = 0;
  private flashStrength = 0;

  constructor() {
    this.root.name = 'first-person-arms';
    this.root.visible = false;
    this.root.matrixAutoUpdate = true;
  }

  /** Rebuild the arms with the colours of the equipped suit model. */
  setSuit(model: THREE.Object3D | null) {
    for (const arm of this.arms) this.root.remove(arm.shoulder);
    for (const material of this.materials) material.dispose();
    this.materials = [];
    this.arms = [];

    const tally = new Map<THREE.Material, number>();
    model?.traverse((object) => {
      const mesh =
        object instanceof THREE.Mesh ||
        object instanceof THREE.SkinnedMesh
          ? object
          : null;
      if (!mesh) return;
      const count = mesh.geometry.getAttribute('position')?.count ?? 0;
      for (const material of Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material])
        tally.set(material, (tally.get(material) ?? 0) + count);
    });
    let primary = new THREE.Color('#b3232b');
    let best = -1;
    let bestMaterial: THREE.Color | null = null;
    for (const [material, count] of tally) {
      const candidate = material as THREE.MeshStandardMaterial;
      if (!candidate.color || count <= best) continue;
      best = count;
      bestMaterial = candidate.color;
    }
    if (bestMaterial) primary = bestMaterial.clone();
    // The accent is the busiest suit colour that actually differs from the
    // base (Spider-Man red vs blue); fall back to a lifted tint for
    // single-colour suits like Venom.
    let secondary: THREE.Color | null = null;
    let accentBest = -1;
    for (const [material, count] of tally) {
      const candidate = material as THREE.MeshStandardMaterial;
      if (!candidate.color) continue;
      if (colorDistance(candidate.color, primary) <= 0.22) continue;
      if (count <= accentBest) continue;
      accentBest = count;
      secondary = candidate.color.clone();
    }
    if (!secondary) secondary = primary.clone().offsetHSL(0, 0, 0.16);

    const suitMaterial = new THREE.MeshStandardMaterial({
      color: primary,
      roughness: 0.46,
      metalness: 0.04,
    });
    const gloveMaterial = new THREE.MeshStandardMaterial({
      color: secondary,
      roughness: 0.38,
      metalness: 0.06,
    });
    this.materials = [suitMaterial, gloveMaterial];
    this.arms = [
      this.buildArm(-1, suitMaterial, gloveMaterial),
      this.buildArm(1, suitMaterial, gloveMaterial),
    ];
  }

  private buildArm(
    side: number,
    suitMaterial: THREE.MeshStandardMaterial,
    gloveMaterial: THREE.MeshStandardMaterial,
  ): ArmChain {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.235, -0.19, -0.06);
    const upperGeometry = new THREE.CapsuleGeometry(0.054, UPPER_LENGTH - 0.03, 6, 12);
    upperGeometry.rotateX(Math.PI / 2);
    upperGeometry.translate(0, 0, -UPPER_LENGTH / 2);
    shoulder.add(new THREE.Mesh(upperGeometry, suitMaterial));

    const elbow = new THREE.Group();
    elbow.position.set(0, 0, -UPPER_LENGTH);
    shoulder.add(elbow);
    const foreGeometry = new THREE.CapsuleGeometry(0.047, FORE_LENGTH - 0.03, 6, 12);
    foreGeometry.rotateX(Math.PI / 2);
    foreGeometry.translate(0, 0, -FORE_LENGTH / 2);
    elbow.add(new THREE.Mesh(foreGeometry, suitMaterial));

    const palm = new THREE.Group();
    palm.position.set(0, 0, -FORE_LENGTH);
    const palmGeometry = new THREE.BoxGeometry(0.078, 0.034, 0.105, 1, 1, 1);
    palmGeometry.translate(0, 0, -0.045);
    palm.add(new THREE.Mesh(palmGeometry, gloveMaterial));
    // Four slightly curled fingers plus an inward thumb: enough silhouette to
    // read as a hand at gameplay speed without any skeleton.
    for (let finger = 0; finger < 4; finger += 1) {
      const geometry = new THREE.CapsuleGeometry(0.0115, 0.062, 4, 8);
      geometry.rotateX(Math.PI / 2);
      const mesh = new THREE.Mesh(geometry, gloveMaterial);
      mesh.position.set(-0.027 + finger * 0.018, 0, -0.118);
      mesh.rotation.x = -0.22 - finger * 0.025;
      palm.add(mesh);
    }
    const thumbGeometry = new THREE.CapsuleGeometry(0.013, 0.05, 4, 8);
    thumbGeometry.rotateX(Math.PI / 2);
    const thumb = new THREE.Mesh(thumbGeometry, gloveMaterial);
    thumb.position.set(-side * 0.045, -0.004, -0.08);
    thumb.rotation.set(-0.35, side * 0.75, 0);
    palm.add(thumb);
    // Web-shooter thwip flash on the palm.
    const flash = new THREE.Mesh(
      new THREE.SphereGeometry(0.02, 10, 8),
      new THREE.MeshBasicMaterial({
        color: '#ffffff',
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      }),
    );
    flash.position.set(0, 0, -0.02);
    flash.visible = false;
    palm.add(flash);
    elbow.add(palm);

    shoulder.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = false;
        mesh.receiveShadow = false;
        mesh.frustumCulled = false;
      }
    });
    this.root.add(shoulder);
    return {
      side,
      shoulder,
      elbow,
      palm,
      flash,
      target: new THREE.Vector3(side * 0.17, -0.24, -0.38),
      pole: new THREE.Vector3(side * 0.35, -1, 0).normalize(),
    };
  }

  /** White thwip pulse on the palms when a web fires. */
  thwip() {
    this.flashStrength = 1;
  }

  /** World position of a palm (for the web strand origin in first person). */
  palmWorld(side: number, target: THREE.Vector3) {
    const arm =
      this.arms.find((entry) => entry.side === side) ?? this.arms[1] ?? null;
    if (!arm) return target.set(0, 0, 0);
    return arm.palm.getWorldPosition(target);
  }

  get palmWorldScratch() {
    return scratchPalmWorld;
  }

  update(camera: THREE.Camera, state: FirstPersonArmState) {
    if (!this.arms.length) return;
    const dt = Math.max(0.0001, Math.min(state.delta, 0.1));
    this.runPhase += dt * (6 + Math.min(state.speed, 16) * 0.55);
    const left = this.arms[0];
    const right = this.arms[1];

    // Desired hand targets in camera space (x right, y up, -z forward).
    const breathe = Math.sin(state.time * 1.7) * 0.01;
    const running = state.grounded && state.speed > 4.5;
    const phase = this.runPhase;
    if (state.wallCrawl) {
      scratchDesired.set(-0.19, 0.03, -0.43 + Math.sin(phase * 0.7) * 0.03);
      left.target.lerp(scratchDesired, 1 - Math.exp(-14 * dt));
      scratchDesired.set(0.19, 0.01, -0.43 - Math.sin(phase * 0.7) * 0.03);
      right.target.lerp(scratchDesired, 1 - Math.exp(-14 * dt));
    } else if (state.swingTargetWorld) {
      const anchor = scratchLocal.copy(state.swingTargetWorld).applyMatrix4(
        camera.matrixWorldInverse,
      );
      const reach = (UPPER_LENGTH + FORE_LENGTH) * 0.965;
      if (anchor.length() > reach) anchor.setLength(reach);
      right.target.lerp(anchor, 1 - Math.exp(-20 * dt));
      scratchDesired.set(-0.2, -0.27, -0.3);
      left.target.lerp(scratchDesired, 1 - Math.exp(-14 * dt));
    } else if (state.zipTargetWorld) {
      const anchor = scratchLocal.copy(state.zipTargetWorld).applyMatrix4(
        camera.matrixWorldInverse,
      );
      const reach = (UPPER_LENGTH + FORE_LENGTH) * 0.965;
      if (anchor.length() > reach) anchor.setLength(reach);
      right.target.lerp(anchor, 1 - Math.exp(-22 * dt));
      scratchDesired.set(-0.17, -0.23, -0.34);
      left.target.lerp(scratchDesired, 1 - Math.exp(-14 * dt));
    } else if (state.gliding) {
      scratchDesired.set(-0.3, -0.11, -0.16);
      left.target.lerp(scratchDesired, 1 - Math.exp(-10 * dt));
      scratchDesired.set(0.3, -0.11, -0.16);
      right.target.lerp(scratchDesired, 1 - Math.exp(-10 * dt));
    } else if (running) {
      scratchDesired.set(
        -0.16,
        -0.16 + Math.sin(phase + Math.PI) * 0.055,
        -0.33 + Math.sin(phase + Math.PI) * 0.085,
      );
      left.target.lerp(scratchDesired, 1 - Math.exp(-16 * dt));
      scratchDesired.set(
        0.16,
        -0.16 + Math.sin(phase) * 0.055,
        -0.33 + Math.sin(phase) * 0.085,
      );
      right.target.lerp(scratchDesired, 1 - Math.exp(-16 * dt));
    } else {
      scratchDesired.set(-0.17, -0.235 + breathe, -0.34);
      left.target.lerp(scratchDesired, 1 - Math.exp(-12 * dt));
      scratchDesired.set(0.17, -0.22 + breathe, -0.36);
      right.target.lerp(scratchDesired, 1 - Math.exp(-12 * dt));
    }

    for (const arm of this.arms) this.solveArm(arm);

    // Speed sway on the whole rig: sells motion without nauseating bob.
    const sway = Math.min(state.speed / 40, 1);
    this.root.position.set(
      Math.sin(phase * 0.5) * 0.006 * sway,
      Math.sin(this.runPhase * 2) * 0.008 * sway,
      0,
    );
    this.root.rotation.z = Math.sin(phase * 0.5) * 0.02 * sway;

    this.flashStrength = Math.max(0, this.flashStrength - dt * 5.5);
    for (const arm of this.arms) {
      arm.flash.visible = this.flashStrength > 0.03;
      arm.flash.scale.setScalar(0.6 + this.flashStrength * 1.6);
      (arm.flash.material as THREE.MeshBasicMaterial).opacity = this.flashStrength;
    }
  }

  /** Exact two-bone IK: shoulder and elbow quaternions reach arm.target. */
  private solveArm(arm: ArmChain) {
    const origin = arm.shoulder.position;
    scratchDirection.copy(arm.target).sub(origin);
    let distance = scratchDirection.length();
    if (distance < 1e-4) return;
    const reach = (UPPER_LENGTH + FORE_LENGTH) * 0.995;
    if (distance > reach) {
      scratchDirection.multiplyScalar(reach / distance);
      distance = reach;
    }
    const direction = scratchDirection.divideScalar(distance);

    const cosShoulder = THREE.MathUtils.clamp(
      (UPPER_LENGTH * UPPER_LENGTH + distance * distance - FORE_LENGTH * FORE_LENGTH) /
        (2 * UPPER_LENGTH * distance),
      -1,
      1,
    );
    const shoulderOffset = Math.acos(cosShoulder);

    scratchAxis.crossVectors(direction, arm.pole);
    if (scratchAxis.lengthSq() < 1e-8) scratchAxis.set(1, 0, 0);
    else scratchAxis.normalize();
    // Bend the elbow toward the pole (down and slightly outward).
    scratchUpper.copy(direction).applyAxisAngle(scratchAxis, shoulderOffset);
    scratchUpperAlt
      .copy(direction)
      .applyAxisAngle(scratchAxis, -shoulderOffset);
    if (scratchUpperAlt.dot(arm.pole) > scratchUpper.dot(arm.pole))
      scratchUpper.copy(scratchUpperAlt);

    arm.shoulder.quaternion.setFromUnitVectors(FORWARD, scratchUpper);
    scratchElbowWorld
      .copy(origin)
      .addScaledVector(scratchUpper, UPPER_LENGTH);
    scratchForearm.copy(arm.target).sub(scratchElbowWorld).normalize();
    scratchInverse.copy(arm.shoulder.quaternion).invert();
    scratchForearm.applyQuaternion(scratchInverse);
    arm.elbow.quaternion.setFromUnitVectors(FORWARD, scratchForearm);
  }

  dispose() {
    for (const arm of this.arms) this.root.remove(arm.shoulder);
    for (const material of this.materials) material.dispose();
    for (const arm of this.arms)
      (arm.flash.material as THREE.Material).dispose();
    this.arms = [];
    this.materials = [];
    this.root.removeFromParent();
  }
}
