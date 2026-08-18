import * as THREE from "three";

import { createEnvironment } from "./environment.js";
import { createGround } from "./ground.js";
import { createGrid } from "./grid.js";
import { createOrigin } from "./origin.js";
import { createTerrain } from "./terrain.js";

export function createWorld(scene) {
  const grid = createGrid();
  scene.add(grid);

  const ground = createGround();
  scene.add(ground);

  const terrain = createTerrain();
  terrain.position.y = 0.01;
  scene.add(terrain);

  const origin = createOrigin();
  scene.add(origin);

  const environment = createEnvironment(scene);
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    color: 0x4f8cff,
  });

  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  return {
    grid,
    ground,
    terrain,
    origin,
    environment,
    cube,
  };
}
