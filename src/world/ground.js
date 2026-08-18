import * as THREE from "three";

export function createGround() {
  const geometry = new THREE.PlaneGeometry(100, 100);

  const material = new THREE.MeshStandardMaterial({
    color: 0x555555,
  });

  const ground = new THREE.Mesh(geometry, material);

  ground.rotation.x = -Math.PI / 2;

  return ground;
}
