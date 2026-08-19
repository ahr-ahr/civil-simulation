export function createSpatialState(object) {
  const state = {
    position: object.position.clone(),
    rotation: object.rotation.clone(),
    scale: object.scale.clone(),
  };

  function setPosition(position) {
    state.position.copy(position);
  }

  function setRotation(rotation) {
    state.rotation.copy(rotation);
  }

  function setScale(scale) {
    state.scale.copy(scale);
  }

  function getPosition() {
    return state.position.clone();
  }

  function getRotation() {
    return state.rotation.clone();
  }

  function getScale() {
    return state.scale.clone();
  }

  function getAll() {
    return {
      position: state.position.clone(),
      rotation: state.rotation.clone(),
      scale: state.scale.clone(),
    };
  }

  return {
    setPosition,
    setRotation,
    setScale,
    getPosition,
    getRotation,
    getScale,
    getAll,
  };
}
