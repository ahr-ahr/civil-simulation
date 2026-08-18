import * as THREE from "three";

export function createCivilObject({ id, type, name }) {
  const object = new THREE.Group();

  object.name = name;

  object.userData = {
    id,
    type,
    metadata: {},
  };

  return object;
}
