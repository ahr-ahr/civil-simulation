import * as THREE from "three";

export function createGrid() {
  const size = 100;
  const divisions = 100;

  const grid = new THREE.GridHelper(size, divisions);

  return grid;
}
