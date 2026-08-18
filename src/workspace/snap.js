export function createSnapSystem(gridSize = 1) {
  function snapValue(value) {
    return Math.round(value / gridSize) * gridSize;
  }

  function snapPosition(position) {
    return {
      x: snapValue(position.x),
      y: snapValue(position.y),
      z: snapValue(position.z),
    };
  }

  return {
    snapValue,
    snapPosition,
  };
}
