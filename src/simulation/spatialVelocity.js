export function createSpatialVelocity() {
  const velocity = {
    x: 0,
    y: 0,
    z: 0,
  };

  function set(x, y, z) {
    velocity.x = x;
    velocity.y = y;
    velocity.z = z;
  }

  function setX(value) {
    velocity.x = value;
  }

  function setY(value) {
    velocity.y = value;
  }

  function setZ(value) {
    velocity.z = value;
  }

  function get() {
    return {
      ...velocity,
    };
  }

  function reset() {
    velocity.x = 0;
    velocity.y = 0;
    velocity.z = 0;
  }

  return {
    set,
    setX,
    setY,
    setZ,
    get,
    reset,
  };
}
