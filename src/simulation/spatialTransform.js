export function createSpatialTransform(object, spatialState) {
  function syncFromObject() {
    spatialState.setPosition(object.position);
    spatialState.setRotation(object.rotation);
    spatialState.setScale(object.scale);
  }

  function syncToObject() {
    object.position.copy(spatialState.getPosition());

    object.rotation.copy(spatialState.getRotation());

    object.scale.copy(spatialState.getScale());
  }

  return {
    syncFromObject,
    syncToObject,
  };
}
