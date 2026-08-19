import { createSimulationState } from "./simulationState.js";

export function createSimulationEngine() {
  const state = createSimulationState();

  function start() {
    state.start();
  }

  function pause() {
    state.pause();
  }

  function reset() {
    state.reset();
  }

  function complete() {
    state.complete();
  }

  function update(deltaTime) {
    if (!state.isRunning()) {
      return;
    }

    // Simulation update will be implemented later.
  }

  function getState() {
    return state.getState();
  }

  return {
    start,
    pause,
    reset,
    complete,
    update,
    getState,
  };
}
