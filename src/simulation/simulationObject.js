export function createSimulationObject(object) {
  let simulationState = {};

  function update(context) {
    if (!object.visible) {
      return;
    }

    if (typeof object.userData.onSimulationUpdate === "function") {
      object.userData.onSimulationUpdate(context, object);
    }
  }

  function setState(state) {
    simulationState = {
      ...simulationState,
      ...state,
    };
  }

  function getState() {
    return simulationState;
  }

  return {
    update,
    setState,
    getState,
  };
}
