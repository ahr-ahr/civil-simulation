export function createScenarioSerializer() {
  function serialize(scenario) {
    if (!scenario) {
      return null;
    }

    const state =
      typeof scenario.getState === "function" ? scenario.getState() : scenario;

    return JSON.stringify(state);
  }

  function deserialize(serializedScenario) {
    if (typeof serializedScenario !== "string") {
      return null;
    }

    try {
      return JSON.parse(serializedScenario);
    } catch {
      return null;
    }
  }

  function serializePretty(scenario, spaces = 2) {
    if (!scenario) {
      return null;
    }

    const state =
      typeof scenario.getState === "function" ? scenario.getState() : scenario;

    return JSON.stringify(state, null, spaces);
  }

  return {
    serialize,
    deserialize,
    serializePretty,
  };
}
