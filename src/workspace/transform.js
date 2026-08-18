export function createTransformSystem() {
  let target = null;

  function setTarget(object) {
    target = object;
  }

  function getTarget() {
    return target;
  }

  function clearTarget() {
    target = null;
  }

  function setPosition(x, y, z) {
    if (!target) return;

    target.position.set(x, y, z);
  }

  function setRotation(x, y, z) {
    if (!target) return;

    target.rotation.set(x, y, z);
  }

  function setScale(x, y, z) {
    if (!target) return;

    target.scale.set(x, y, z);
  }

  return {
    setTarget,
    getTarget,
    clearTarget,
    setPosition,
    setRotation,
    setScale,
  };
}
