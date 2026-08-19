export function createSimulationBehaviorRegistry() {
  const behaviors = new Map();

  function register(name, behavior) {
    if (!name) {
      throw new Error("Behavior name is required");
    }

    if (!behavior) {
      throw new Error(`Behavior "${name}" is invalid`);
    }

    behaviors.set(name, behavior);
  }

  function unregister(name) {
    behaviors.delete(name);
  }

  function has(name) {
    return behaviors.has(name);
  }

  function get(name) {
    return behaviors.get(name) ?? null;
  }

  function getAll() {
    return new Map(behaviors);
  }

  function clear() {
    behaviors.clear();
  }

  return {
    register,
    unregister,
    has,
    get,
    getAll,
    clear,
  };
}
