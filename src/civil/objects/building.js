import * as THREE from "three";

import { createCivilObject } from "../../workspace/objects/civilObject.js";
import { CIVIL_OBJECT_TYPES } from "./objectTypes.js";

export function createBuilding({
  id,
  name = "Building",
  width = 10,
  height = 3,
  depth = 10,
}) {
  const building = createCivilObject({
    id,
    type: CIVIL_OBJECT_TYPES.BUILDING,
    name,
  });

  const geometry = new THREE.BoxGeometry(width, height, depth);

  const material = new THREE.MeshStandardMaterial({
    color: 0x8a8a8a,
  });

  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.y = height / 2;

  building.add(mesh);

  building.userData.metadata = {
    dimensions: {
      width,
      height,
      depth,
    },
  };

  return building;
}
