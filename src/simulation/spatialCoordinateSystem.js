export function createSpatialCoordinateSystem() {
  const origin = {
    x: 0,
    y: 0,
    z: 0,
  };

  function setOrigin(x, y, z) {
    origin.x = x;
    origin.y = y;
    origin.z = z;
  }

  function getOrigin() {
    return {
      ...origin,
    };
  }

  function worldToLocal(position) {
    return {
      x: position.x - origin.x,
      y: position.y - origin.y,
      z: position.z - origin.z,
    };
  }

  function localToWorld(position) {
    return {
      x: position.x + origin.x,
      y: position.y + origin.y,
      z: position.z + origin.z,
    };
  }

  return {
    setOrigin,
    getOrigin,
    worldToLocal,
    localToWorld,
  };
}
