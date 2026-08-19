export function createSpatialCollision({ spatialState, groundY = 0 } = {}) {
  function resolveGround() {
    const position = spatialState.getPosition();

    if (position.y < groundY) {
      position.y = groundY;

      spatialState.setPosition(position);

      return true;
    }

    return false;
  }

  return {
    resolveGround,
  };
}
