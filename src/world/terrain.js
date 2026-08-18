import * as THREE from "three";

export function createTerrain() {
  const width = 100;
  const depth = 100;

  const segmentsX = 100;
  const segmentsZ = 100;

  const geometry = new THREE.PlaneGeometry(width, depth, segmentsX, segmentsZ);

  const material = new THREE.MeshStandardMaterial({
    color: 0x4a4a4a,
  });

  const terrain = new THREE.Mesh(geometry, material);

  terrain.rotation.x = -Math.PI / 2;

  return terrain;
}
