import { createSimulationState, SIMULATION_STATES } from "./simulationState.js";

export function createSimulationEngine() {
  const state = createSimulationState();

  function start() {
    state.setState(SIMULATION_STATES.RUNNING);
  }

  function stop() {
    state.setState(SIMULATION_STATES.IDLE);
  }

  function update(deltaTime) {
    if (state.getState() !== SIMULATION_STATES.RUNNING) {
      return;
    }

    // Simulation update will be implemented later.
  }

  function getState() {
    return state.getState();
  }

  return {
    start,
    stop,
    update,
    getState,
  };
}
