export function createSpatialConstraints({
  spatialState,
  min = null,
  max = null,
} = {}) {
  function apply() {
    const position = spatialState.getPosition();

    if (min) {
      if (min.x !== undefined) {
        position.x = Math.max(position.x, min.x);
      }

      if (min.y !== undefined) {
        position.y = Math.max(position.y, min.y);
      }

      if (min.z !== undefined) {
        position.z = Math.max(position.z, min.z);
      }
    }

    if (max) {
      if (max.x !== undefined) {
        position.x = Math.min(position.x, max.x);
      }

      if (max.y !== undefined) {
        position.y = Math.min(position.y, max.y);
      }

      if (max.z !== undefined) {
        position.z = Math.min(position.z, max.z);
      }
    }

    spatialState.setPosition(position);
  }

  return {
    apply,
  };
}
