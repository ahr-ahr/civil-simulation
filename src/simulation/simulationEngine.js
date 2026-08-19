import { createSimulationState } from "./simulationState.js";
import { createSimulationClock } from "./simulationClock.js";

export function createSimulationEngine() {
  const state = createSimulationState();
  const clock = createSimulationClock();

  function start() {
    state.start();
  }

  function pause() {
    state.pause();
  }

  function reset() {
    state.reset();
    clock.reset();
  }

  function complete() {
    state.complete();
  }

  function update(deltaTime) {
    if (!state.isRunning()) {
      return;
    }

    clock.update(deltaTime);
  }

  function getState() {
    return state.getState();
  }

  function getElapsedTime() {
    return clock.getElapsedTime();
  }

  return {
    start,
    pause,
    reset,
    complete,
    update,
    getState,
    getElapsedTime,
  };
}
