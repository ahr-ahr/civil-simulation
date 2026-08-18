import * as THREE from "three";

export function createOrigin() {
  const origin = new THREE.AxesHelper(2);

  origin.position.set(0, 0, 0);

  return origin;
}
