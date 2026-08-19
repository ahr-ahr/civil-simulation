import { createSpatialState } from "./spatialState.js";
import { createSpatialTransform } from "./spatialTransform.js";
import { createSpatialVelocity } from "./spatialVelocity.js";
import { createSpatialAcceleration } from "./spatialAcceleration.js";
import { createSpatialGravity } from "./spatialGravity.js";
import { createSpatialMovement } from "./spatialMovement.js";
import { createSpatialCollision } from "./spatialCollision.js";
import { createSpatialConstraints } from "./spatialConstraints.js";

export function createSimulationObject(object) {
  let simulationState = {};
  let behavior = null;

  const initialTransform = {
    position: object.position.clone(),
    rotation: object.rotation.clone(),
    scale: object.scale.clone(),
  };

  const spatialState = createSpatialState(object);

  const spatialTransform = createSpatialTransform(object, spatialState);

  const velocity = createSpatialVelocity();

  const acceleration = createSpatialAcceleration();

  const gravity = createSpatialGravity();

  const movement = createSpatialMovement({
    spatialState,
    velocity,
    acceleration,
    gravity,
  });

  const collision = createSpatialCollision({
    spatialState,
    groundY: 0,
  });

  const constraints = createSpatialConstraints({
    spatialState,
  });

  function update(context) {
    if (!object.visible) {
      return;
    }

    movement.update(context.deltaTime);

    collision.resolveGround();

    constraints.apply();

    spatialTransform.syncToObject();

    if (behavior) {
      behavior.execute(context, object);

      spatialTransform.syncFromObject();
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

    spatialState.setPosition(initialTransform.position);

    spatialState.setRotation(initialTransform.rotation);

    spatialState.setScale(initialTransform.scale);

    velocity.reset();
    acceleration.reset();
  }

  function getSpatialState() {
    return spatialState.getAll();
  }

  function getVelocity() {
    return velocity.get();
  }

  function getAcceleration() {
    return acceleration.get();
  }

  function getGravity() {
    return gravity.get();
  }

  return {
    update,

    setBehavior,
    clearBehavior,

    setState,
    getState,

    getInitialTransform,
    restoreInitialState,

    getSpatialState,
    getVelocity,
    getAcceleration,
    getGravity,
  };
}
