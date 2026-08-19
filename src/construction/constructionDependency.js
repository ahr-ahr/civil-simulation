export function createConstructionDependency() {
  const dependencies = new Map();

  function add(processId, dependencyId) {
    if (!dependencies.has(processId)) {
      dependencies.set(processId, new Set());
    }

    dependencies.get(processId).add(dependencyId);
  }

  function remove(processId, dependencyId) {
    const processDependencies = dependencies.get(processId);

    if (!processDependencies) {
      return;
    }

    processDependencies.delete(dependencyId);

    if (processDependencies.size === 0) {
      dependencies.delete(processId);
    }
  }

  function get(processId) {
    const processDependencies = dependencies.get(processId);

    if (!processDependencies) {
      return [];
    }

    return [...processDependencies];
  }

  function canStart(processId, processRegistry) {
    const processDependencies = dependencies.get(processId);

    if (!processDependencies) {
      return true;
    }

    for (const dependencyId of processDependencies) {
      const process = processRegistry.get(dependencyId);

      if (!process) {
        return false;
      }

      if (!process.isComplete()) {
        return false;
      }
    }

    return true;
  }

  function clear() {
    dependencies.clear();
  }

  return {
    add,
    remove,
    get,
    canStart,
    clear,
  };
}
