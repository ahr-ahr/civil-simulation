import { createSimulationState } from "./simulationState.js";
import { createSimulationClock } from "./simulationClock.js";
import { createSimulationEvents } from "./simulationEvents.js";
import { SIMULATION_EVENTS } from "./simulationEventTypes.js";
import { createSimulationContext } from "./simulationContext.js";
import { createSimulationParameters } from "./simulationParameters.js";

export function createSimulationEngine() {
  const state = createSimulationState();
  const clock = createSimulationClock();
  const events = createSimulationEvents();
  const simulationObjects = new Set();
  const parameters = createSimulationParameters();

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

  function resume() {
    state.start();

    if (state.isRunning()) {
      events.emit(SIMULATION_EVENTS.STARTED);
    }
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

    clock.update(deltaTime, parameters.getTimeScale());

    const context = createSimulationContext({
      deltaTime,
      elapsedTime: clock.getElapsedTime(),
      parameters: parameters.getAll(),
    });

    for (const simulationObject of simulationObjects) {
      simulationObject.update(context);
    }

    events.emit(SIMULATION_EVENTS.UPDATED, context);
  }

  function addObject(simulationObject) {
    simulationObjects.add(simulationObject);
  }

  function removeObject(simulationObject) {
    simulationObjects.delete(simulationObject);
  }

  function registerObject(object) {
    const simulationObject = object.userData.simulationObject;

    if (!simulationObject) {
      return null;
    }

    simulationObjects.add(simulationObject);

    return simulationObject;
  }

  function unregisterObject(object) {
    const simulationObject = object.userData.simulationObject;

    if (!simulationObject) {
      return;
    }

    simulationObjects.delete(simulationObject);
  }

  function getState() {
    return state.getState();
  }

  function getElapsedTime() {
    return clock.getElapsedTime();
  }

  function getParameters() {
    return parameters.getAll();
  }

  function setTimeScale(value) {
    parameters.setTimeScale(value);
  }

  function getTimeScale() {
    return parameters.getTimeScale();
  }

  return {
    start,
    pause,
    resume,
    reset,
    complete,
    update,
    getState,
    getElapsedTime,
    getParameters,
    setTimeScale,
    getTimeScale,
    addObject,
    removeObject,
    registerObject,
    unregisterObject,
    on: events.on,
    off: events.off,
  };
}
