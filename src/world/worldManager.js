import * as THREE from "three";

export function createWorldManager(scene) {
  const world = new THREE.Group();
  world.name = "CivilWorld";
  scene.add(world);

  return {
    world,

    add(object) {
      world.add(object);
    },

    remove(object) {
      world.remove(object);
    },

    clear() {
      world.clear();
    },
  };
}
