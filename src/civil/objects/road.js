import * as THREE from "three";

import { createCivilObject } from "../../workspace/objects/civilObject.js";
import { CIVIL_OBJECT_TYPES } from "./objectTypes.js";

export function createRoad({
  id,
  name = "Road",
  width = 6,
  length = 20,
  thickness = 0.2,
}) {
  const road = createCivilObject({
    id,
    type: CIVIL_OBJECT_TYPES.ROAD,
    name,
  });

  const geometry = new THREE.BoxGeometry(width, thickness, length);

  const material = new THREE.MeshStandardMaterial({
    color: 0x555555,
  });

  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.y = thickness / 2;

  road.add(mesh);

  road.userData.metadata = {
    dimensions: {
      width,
      length,
      thickness,
    },
  };

  return road;
}
