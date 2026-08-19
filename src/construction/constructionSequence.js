export function createConstructionSequence({ processRegistry, dependency }) {
  function getAvailable() {
    const available = [];

    for (const [processId, process] of processRegistry) {
      if (process.isComplete()) {
        continue;
      }

      if (dependency.canStart(processId, processRegistry)) {
        available.push(processId);
      }
    }

    return available;
  }

  function getNext() {
    const available = getAvailable();

    if (available.length === 0) {
      return null;
    }

    return available[0];
  }

  function isComplete() {
    for (const process of processRegistry.values()) {
      if (!process.isComplete()) {
        return false;
      }
    }

    return true;
  }

  return {
    getAvailable,
    getNext,
    isComplete,
  };
}
