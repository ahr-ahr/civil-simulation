export function createSpatialMovement({ spatialState, velocity }) {
  function update(deltaTime) {
    const currentPosition = spatialState.getPosition();

    const currentVelocity = velocity.get();

    currentPosition.x += currentVelocity.x * deltaTime;

    currentPosition.y += currentVelocity.y * deltaTime;

    currentPosition.z += currentVelocity.z * deltaTime;

    spatialState.setPosition(currentPosition);
  }

  return {
    update,
  };
}
