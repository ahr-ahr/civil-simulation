import { createScenarioState } from "./scenarioState.js";
import { createScenarioSerializer } from "./scenarioSerializer.js";

export function createScenarioLoader() {
  const serializer = createScenarioSerializer();

  function load(serializedScenario) {
    const data = serializer.deserialize(serializedScenario);

    if (!data) {
      return null;
    }

    const scenario = createScenarioState({
      id: data.id,
      name: data.name,
    });

    for (const objectId of data.objects ?? []) {
      scenario.addObject(objectId);
    }

    scenario.setParameters(data.parameters ?? {});

    scenario.setMetadata(data.metadata ?? {});

    return scenario;
  }

  return {
    load,
  };
}
