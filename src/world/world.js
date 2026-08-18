import * as THREE from "three";
import { createGround } from "./ground.js";

export function createWorld(scene) {
  const grid = new THREE.GridHelper(20, 20);
  scene.add(grid);

  const ground = createGround();
  scene.add(ground);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 5);
  scene.add(directionalLight);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    color: 0x4f8cff,
  });

  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  return {
    grid,
    ground,
    cube,
  };
}
