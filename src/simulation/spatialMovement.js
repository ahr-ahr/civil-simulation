export function createSpatialMovement({
  spatialState,
  velocity,
  acceleration = null,
  gravity = null,
}) {
  function update(deltaTime) {
    const currentVelocity = velocity.get();

    if (acceleration) {
      const currentAcceleration = acceleration.get();

      currentVelocity.x += currentAcceleration.x * deltaTime;
      currentVelocity.y += currentAcceleration.y * deltaTime;
      currentVelocity.z += currentAcceleration.z * deltaTime;
    }

    if (gravity) {
      const currentGravity = gravity.get();

      currentVelocity.x += currentGravity.x * deltaTime;
      currentVelocity.y += currentGravity.y * deltaTime;
      currentVelocity.z += currentGravity.z * deltaTime;
    }

    velocity.set(currentVelocity.x, currentVelocity.y, currentVelocity.z);

    const currentPosition = spatialState.getPosition();

    currentPosition.x += currentVelocity.x * deltaTime;
    currentPosition.y += currentVelocity.y * deltaTime;
    currentPosition.z += currentVelocity.z * deltaTime;

    spatialState.setPosition(currentPosition);
  }

  return {
    update,
  };
}
