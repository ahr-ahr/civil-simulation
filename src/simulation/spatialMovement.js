export function createSpatialMovement({
  spatialState,
  velocity,
  acceleration = null,
}) {
  function update(deltaTime) {
    if (acceleration) {
      const currentVelocity = velocity.get();
      const currentAcceleration = acceleration.get();

      currentVelocity.x += currentAcceleration.x * deltaTime;
      currentVelocity.y += currentAcceleration.y * deltaTime;
      currentVelocity.z += currentAcceleration.z * deltaTime;

      velocity.set(currentVelocity.x, currentVelocity.y, currentVelocity.z);
    }

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
