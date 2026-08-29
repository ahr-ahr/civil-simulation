export function createScenarioState({ id, name } = {}) {
  let scenario = {
    id: id ?? null,
    name: name ?? "Untitled Scenario",
    objects: [],
    parameters: {},
    metadata: {},
  };

  function setId(value) {
    scenario.id = value;
  }

  function setName(value) {
    scenario.name = value;
  }

  function addObject(objectId) {
    if (scenario.objects.includes(objectId)) {
      return;
    }

    scenario.objects.push(objectId);
  }

  function removeObject(objectId) {
    scenario.objects = scenario.objects.filter((id) => id !== objectId);
  }

  function setParameters(parameters) {
    scenario.parameters = {
      ...parameters,
    };
  }

  function setMetadata(metadata) {
    scenario.metadata = {
      ...metadata,
    };
  }

  function getState() {
    return {
      id: scenario.id,
      name: scenario.name,
      objects: [...scenario.objects],
      parameters: {
        ...scenario.parameters,
      },
      metadata: {
        ...scenario.metadata,
      },
    };
  }

  function reset() {
    scenario = {
      id: null,
      name: "Untitled Scenario",
      objects: [],
      parameters: {},
      metadata: {},
    };
  }

  return {
    setId,
    setName,
    addObject,
    removeObject,
    setParameters,
    setMetadata,
    getState,
    reset,
  };
}
