export function createSimulationObject(object) {
  let simulationState = {};

  const initialTransform = {
    position: object.position.clone(),
    rotation: object.rotation.clone(),
    scale: object.scale.clone(),
  };

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

  function getInitialTransform() {
    return {
      position: initialTransform.position.clone(),
      rotation: initialTransform.rotation.clone(),
      scale: initialTransform.scale.clone(),
    };
  }

  return {
    update,
    setState,
    getState,
    getInitialTransform,
  };
}
