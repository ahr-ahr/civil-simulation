import * as THREE from "three";

import { createEnvironment } from "./environment.js";
import { createGround } from "./ground.js";
import { createGrid } from "./grid.js";
import { createOrigin } from "./origin.js";
import { createTerrain } from "./terrain.js";
import { createWorldManager } from "./worldManager.js";

export function createWorld(scene) {
  const manager = createWorldManager(scene);

  const grid = createGrid();
  manager.add(grid);

  const ground = createGround();
  manager.add(ground);

  const terrain = createTerrain();
  terrain.position.y = 0.01;
  manager.add(terrain);

  const origin = createOrigin();
  manager.add(origin);

  const environment = createEnvironment(scene);
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    color: 0x4f8cff,
  });

  const cube = new THREE.Mesh(geometry, material);
  manager.add(cube);

  return {
    manager,
    grid,
    ground,
    terrain,
    origin,
    environment,
    cube,
  };
}
