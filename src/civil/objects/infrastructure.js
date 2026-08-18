import * as THREE from "three";

const INFRASTRUCTURE_TYPES = {
  COLUMN: "column",
  BEAM: "beam",
  SLAB: "slab",
};

export function createInfrastructureComponent({
  id,
  type,
  width = 1,
  height = 1,
  depth = 1,
}) {
  const component = new THREE.Group();

  component.name = type;

  component.userData = {
    id,
    type,
    metadata: {
      dimensions: {
        width,
        height,
        depth,
      },
    },
  };

  const geometry = new THREE.BoxGeometry(width, height, depth);

  const material = new THREE.MeshStandardMaterial({
    color: 0x888888,
  });

  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.y = height / 2;

  component.add(mesh);

  return component;
}

export { INFRASTRUCTURE_TYPES };
