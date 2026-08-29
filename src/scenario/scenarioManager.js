import { createScenarioState } from "./scenarioState.js";

export function createScenarioManager() {
  const scenarios = new Map();
  let activeScenarioId = null;

  function create({ id, name } = {}) {
    if (!id) {
      return null;
    }

    if (scenarios.has(id)) {
      return null;
    }

    const scenario = createScenarioState({
      id,
      name,
    });

    scenarios.set(id, scenario);

    if (activeScenarioId === null) {
      activeScenarioId = id;
    }

    return scenario;
  }

  function add(scenario) {
    if (!scenario || typeof scenario.getState !== "function") {
      return false;
    }

    const state = scenario.getState();

    if (!state.id) {
      return false;
    }

    if (scenarios.has(state.id)) {
      return false;
    }

    scenarios.set(state.id, scenario);

    if (activeScenarioId === null) {
      activeScenarioId = state.id;
    }

    return true;
  }

  function get(id) {
    return scenarios.get(id) ?? null;
  }

  function getAll() {
    return [...scenarios.values()];
  }

  function getActive() {
    if (!activeScenarioId) {
      return null;
    }

    return scenarios.get(activeScenarioId) ?? null;
  }

  function setActive(id) {
    if (!scenarios.has(id)) {
      return false;
    }

    activeScenarioId = id;

    return true;
  }

  function remove(id) {
    if (!scenarios.has(id)) {
      return false;
    }

    scenarios.delete(id);

    if (activeScenarioId === id) {
      const remaining = [...scenarios.keys()];

      activeScenarioId = remaining.length > 0 ? remaining[0] : null;
    }

    return true;
  }

  function clear() {
    scenarios.clear();
    activeScenarioId = null;
  }

  function size() {
    return scenarios.size;
  }

  return {
    create,
    add,
    get,
    getAll,
    getActive,
    setActive,
    remove,
    clear,
    size,
  };
}
