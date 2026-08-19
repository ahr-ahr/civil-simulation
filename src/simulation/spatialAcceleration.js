export function createSpatialAcceleration() {
  const acceleration = {
    x: 0,
    y: 0,
    z: 0,
  };

  function set(x, y, z) {
    acceleration.x = x;
    acceleration.y = y;
    acceleration.z = z;
  }

  function setX(value) {
    acceleration.x = value;
  }

  function setY(value) {
    acceleration.y = value;
  }

  function setZ(value) {
    acceleration.z = value;
  }

  function get() {
    return {
      ...acceleration,
    };
  }

  function reset() {
    acceleration.x = 0;
    acceleration.y = 0;
    acceleration.z = 0;
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
