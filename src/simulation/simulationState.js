export const SIMULATION_STATES = {
  IDLE: "idle",
  RUNNING: "running",
  PAUSED: "paused",
  COMPLETED: "completed",
};

export function createSimulationState() {
  let state = SIMULATION_STATES.IDLE;

  function start() {
    if (
      state === SIMULATION_STATES.IDLE ||
      state === SIMULATION_STATES.PAUSED
    ) {
      state = SIMULATION_STATES.RUNNING;
    }
  }

  function pause() {
    if (state === SIMULATION_STATES.RUNNING) {
      state = SIMULATION_STATES.PAUSED;
    }
  }

  function reset() {
    state = SIMULATION_STATES.IDLE;
  }

  function complete() {
    if (state === SIMULATION_STATES.RUNNING) {
      state = SIMULATION_STATES.COMPLETED;
    }
  }

  function getState() {
    return state;
  }

  function isRunning() {
    return state === SIMULATION_STATES.RUNNING;
  }

  return {
    start,
    pause,
    reset,
    complete,
    getState,
    isRunning,
  };
}
