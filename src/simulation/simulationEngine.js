import { createSimulationState } from "./simulationState.js";
import { createSimulationClock } from "./simulationClock.js";
import { createSimulationEvents } from "./simulationEvents.js";
import { SIMULATION_EVENTS } from "./simulationEventTypes.js";

export function createSimulationEngine() {
  const state = createSimulationState();
  const clock = createSimulationClock();
  const events = createSimulationEvents();

  function start() {
    state.start();

    if (state.isRunning()) {
      events.emit(SIMULATION_EVENTS.STARTED);
    }
  }

  function pause() {
    state.pause();

    events.emit(SIMULATION_EVENTS.PAUSED);
  }

  function reset() {
    state.reset();
    clock.reset();

    events.emit(SIMULATION_EVENTS.RESET);
  }

  function complete() {
    state.complete();

    events.emit(SIMULATION_EVENTS.COMPLETED);
  }

  function update(deltaTime) {
    if (!state.isRunning()) {
      return;
    }

    clock.update(deltaTime);

    events.emit(SIMULATION_EVENTS.UPDATED, {
      deltaTime,
      elapsedTime: clock.getElapsedTime(),
    });
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
    on: events.on,
    off: events.off,
  };
}
