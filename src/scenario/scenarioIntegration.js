export function createScenarioIntegration({
  scenario,
  objectManager,
  simulation,
} = {}) {
  function addObject(objectId, object, simulationObject = null) {
    if (!scenario) {
      return false;
    }

    if (!objectId || !object) {
      return false;
    }

    objectManager.add(object);

    scenario.addObject(objectId);

    if (simulationObject) {
      simulation.addObject(simulationObject);
    }

    return true;
  }

  function removeObject(objectId) {
    if (!scenario) {
      return false;
    }

    scenario.removeObject(objectId);

    return true;
  }

  function getObjects() {
    if (!scenario) {
      return [];
    }

    return scenario.getState().objects;
  }

  function getScenario() {
    return scenario;
  }

  return {
    addObject,
    removeObject,
    getObjects,
    getScenario,
  };
}
