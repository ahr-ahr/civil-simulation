export const SIMULATION_STATES = {
  IDLE: "idle",
  RUNNING: "running",
  PAUSED: "paused",
  COMPLETED: "completed",
};

export function createSimulationState() {
  let state = SIMULATION_STATES.IDLE;

  function setState(nextState) {
    state = nextState;
  }

  function getState() {
    return state;
  }

  return {
    setState,
    getState,
  };
}
