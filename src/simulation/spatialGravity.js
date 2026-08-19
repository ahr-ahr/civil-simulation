export function createSpatialGravity() {
  const gravity = {
    x: 0,
    y: -9.81,
    z: 0,
  };

  function set(x, y, z) {
    gravity.x = x;
    gravity.y = y;
    gravity.z = z;
  }

  function setX(value) {
    gravity.x = value;
  }

  function setY(value) {
    gravity.y = value;
  }

  function setZ(value) {
    gravity.z = value;
  }

  function get() {
    return {
      ...gravity,
    };
  }

  return {
    set,
    setX,
    setY,
    setZ,
    get,
  };
}
