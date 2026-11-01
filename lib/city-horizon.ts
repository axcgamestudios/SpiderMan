import * as THREE from 'three';

/** Shared source geometry, repeated to the fog horizon; collision remains in RepeatingMeshWorld. */
export class CityHorizon {
  readonly root = new THREE.Group();
  private readonly instancedMeshes: THREE.InstancedMesh[] = [];
  private readonly bounds: THREE.Box3;
  private readonly frustum = new THREE.Frustum();
  private readonly matrix = new THREE.Matrix4();
  private readonly box = new THREE.Box3();
  /** Reused scratch objects: update() runs every frame and must not allocate. */
  private readonly cellOffset = new THREE.Vector3();
  private readonly lastCameraQuaternion = new THREE.Quaternion();
  private readonly lastCameraPosition = new THREE.Vector3();
  private hasLastCameraPose = false;
  private lastCellX = Number.NaN;
  private lastCellZ = Number.NaN;
  private lastTileCount = -1;
  private lastRange = -1;
  readonly width: number;
  readonly depth: number;
  constructor(
    source: THREE.Object3D,
    transform: THREE.Matrix4,
    full: THREE.Object3D,
    width: number,
    depth: number,
  ) {
    this.width = width;
    this.depth = depth;
    const materials = new Map<string, THREE.Material>();
    full.traverse((o) => {
      if (o instanceof THREE.Mesh)
        for (const m of Array.isArray(o.material) ? o.material : [o.material])
          materials.set(m.name, m);
    });
    const capacity =
      (2 * Math.ceil(3000 / width) + 5) * (2 * Math.ceil(3000 / depth) + 5);
    source.updateMatrixWorld(true);
    source.traverse((o) => {
      if (!(o instanceof THREE.Mesh)) return;
      const geometry = o.geometry
        .clone()
        .applyMatrix4(
          new THREE.Matrix4().multiplyMatrices(transform, o.matrixWorld),
        );
      const sourceMaterial = Array.isArray(o.material)
        ? o.material[0]
        : o.material;
      const detailedMaterial =
        materials.get(sourceMaterial.name) ?? sourceMaterial;
      // Distant tiles keep the facade texture: stripping it made skyline tiles
      // pop between textured and flat white whenever the player crossed the
      // detail radius, which read as a flickering horizon against the sky.
      const mesh = new THREE.InstancedMesh(geometry, detailedMaterial, capacity);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      mesh.count = 0;
      this.instancedMeshes.push(mesh);
      this.root.add(mesh);
    });
    const floor = full.children.find((o) => o.userData.walkableStreetSurface);
    if (floor instanceof THREE.Mesh) {
      // Distant floor copies must never overlap each other or a full tile's
      // floor: coplanar overlaps are what made the streets flicker. Rebuild
      // the slab to the exact streaming cell (slightly inset, a hair lower)
      // so every copy butts against its neighbours instead of z-fighting.
      const floorSize = new THREE.Box3()
        .setFromBufferAttribute(
          floor.geometry.getAttribute('position') as THREE.BufferAttribute,
        )
        .getSize(new THREE.Vector3());
      const geometry = new THREE.BoxGeometry(
        Math.min(floorSize.x, width - 0.04),
        floorSize.y,
        Math.min(floorSize.z, depth - 0.04),
      );
      geometry.applyMatrix4(floor.matrixWorld);
      geometry.translate(0, -0.02, 0);
      const mesh = new THREE.InstancedMesh(geometry, floor.material, capacity);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      mesh.receiveShadow = true;
      mesh.count = 0;
      this.instancedMeshes.push(mesh);
      this.root.add(mesh);
    }
    this.bounds = new THREE.Box3().makeEmpty();
    for (const m of this.instancedMeshes) {
      m.geometry.computeBoundingBox();
      this.bounds.union(m.geometry.boundingBox!);
    }
    // Instance matrices carry all the motion; the object transforms are static
    // from here on, so opt the whole horizon out of the per-frame matrix pass.
    this.root.updateMatrixWorld(true);
    this.root.traverse((object) => {
      object.matrixAutoUpdate = false;
      object.matrixWorldNeedsUpdate = false;
    });
  }
  /** Forces the next update() to rebuild instances (e.g. after a resize). */
  invalidate() {
    this.lastCellX = Number.NaN;
    this.lastCellZ = Number.NaN;
    this.lastTileCount = -1;
    this.lastRange = -1;
    this.hasLastCameraPose = false;
  }
  update(
    camera: THREE.PerspectiveCamera,
    position: THREE.Vector3,
    fullTiles: ReadonlyMap<string, unknown>,
    range = camera.far,
  ) {
    const cx = Math.round(position.x / this.width),
      cz = Math.round(position.z / this.depth);
    // Instance matrices only change when the player crosses a cell, the set
    // of detailed tiles changes, the fog range moves, or the camera turns or
    // travels far enough to bring new skyline cells into view. Skip identical
    // rebuilds so the common cruising frame writes no matrices at all.
    const cameraTurned =
      !this.hasLastCameraPose ||
      this.lastCameraQuaternion.angleTo(camera.quaternion) > 0.04 ||
      this.lastCameraPosition.distanceToSquared(camera.position) > 1600;
    const tileCount = fullTiles.size;
    if (
      !cameraTurned &&
      cx === this.lastCellX &&
      cz === this.lastCellZ &&
      tileCount === this.lastTileCount &&
      range === this.lastRange
    )
      return;
    this.lastCellX = cx;
    this.lastCellZ = cz;
    this.lastTileCount = tileCount;
    this.lastRange = range;
    this.hasLastCameraPose = true;
    this.lastCameraQuaternion.copy(camera.quaternion);
    this.lastCameraPosition.copy(camera.position);
    camera.updateMatrixWorld();
    this.frustum.setFromProjectionMatrix(
      this.matrix.multiplyMatrices(
        camera.projectionMatrix,
        camera.matrixWorldInverse,
      ),
    );
    const visibleRange = Math.max(this.width, Math.min(camera.far, range));
    const rx = Math.ceil(visibleRange / this.width) + 1,
      rz = Math.ceil(visibleRange / this.depth) + 1;
    let instances = 0;
    for (let x = cx - rx; x <= cx + rx; x++)
      for (let z = cz - rz; z <= cz + rz; z++) {
        if (fullTiles.has(`${x}:${z}`)) continue;
        this.cellOffset.set(x * this.width, 0, z * this.depth);
        this.box.copy(this.bounds).translate(this.cellOffset);
        if (
          this.box.distanceToPoint(position) > visibleRange ||
          !this.frustum.intersectsBox(this.box)
        )
          continue;
        this.matrix.makeTranslation(
          this.cellOffset.x,
          this.cellOffset.y,
          this.cellOffset.z,
        );
        for (const mesh of this.instancedMeshes)
          mesh.setMatrixAt(instances, this.matrix);
        instances++;
      }
    for (const mesh of this.instancedMeshes) {
      mesh.count = instances;
      mesh.instanceMatrix.needsUpdate = true;
    }
    this.root.userData.tileCount = instances;
    this.root.userData.texturedTileCount = instances;
  }
  dispose() {
    this.root.removeFromParent();
    for (const m of this.instancedMeshes) {
      m.geometry.dispose();
      m.dispose();
    }
  }
}
