import { createObjectRegistry } from "./objectRegistry.js";
import { createObjectLifecycle } from "./objectLifecycle.js";

export function createCivilObjectManager(scene) {
  const registry = createObjectRegistry();

  function add(object) {
    scene.add(object);

    const lifecycle = createObjectLifecycle(object);

    object.userData.lifecycle = lifecycle;

    registry.register(object);

    return object;
  }

  function remove(id) {
    const object = registry.get(id);

    if (!object) {
      return false;
    }

    object.userData.lifecycle.remove();

    scene.remove(object);

    registry.unregister(id);

    return true;
  }

  function get(id) {
    return registry.get(id);
  }

  function getAll() {
    return registry.getAll();
  }

  function clear() {
    for (const object of registry.getAll()) {
      object.userData.lifecycle.remove();
      scene.remove(object);
    }

    registry.clear();
  }

  return {
    add,
    remove,
    get,
    getAll,
    clear,
  };
}
