import * as THREE from "three";

import { createObjectMetadata } from "../../civil/objects/objectMetadata.js";

export function createCivilObject({ id, type, name }) {
  const object = new THREE.Group();

  object.name = name;

  object.userData = {
    id,
    type,
    metadata: createObjectMetadata(),
  };

  return object;
}
