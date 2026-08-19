export function createSimulationObject(object) {
  let simulationState = {};
  let behavior = null;

  const initialTransform = {
    position: object.position.clone(),
    rotation: object.rotation.clone(),
    scale: object.scale.clone(),
  };

  function update(context) {
    if (!object.visible) {
      return;
    }

    if (behavior) {
      behavior.execute(context, object);
    }
  }

  function setBehavior(nextBehavior) {
    behavior = nextBehavior;
  }

  function clearBehavior() {
    behavior = null;
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

  function restoreInitialState() {
    object.position.copy(initialTransform.position);
    object.rotation.copy(initialTransform.rotation);
    object.scale.copy(initialTransform.scale);
  }

  return {
    update,
    setBehavior,
    clearBehavior,
    setState,
    getState,
    getInitialTransform,
    restoreInitialState,
  };
}
