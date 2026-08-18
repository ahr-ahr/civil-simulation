export const OBJECT_STATES = {
  ACTIVE: "active",
  HIDDEN: "hidden",
  REMOVED: "removed",
};

export function createObjectLifecycle(object) {
  let state = OBJECT_STATES.ACTIVE;

  function activate() {
    state = OBJECT_STATES.ACTIVE;
    object.visible = true;
  }

  function hide() {
    state = OBJECT_STATES.HIDDEN;
    object.visible = false;
  }

  function remove() {
    state = OBJECT_STATES.REMOVED;
    object.visible = false;
  }

  function getState() {
    return state;
  }

  function isActive() {
    return state === OBJECT_STATES.ACTIVE;
  }

  function isHidden() {
    return state === OBJECT_STATES.HIDDEN;
  }

  function isRemoved() {
    return state === OBJECT_STATES.REMOVED;
  }

  return {
    activate,
    hide,
    remove,
    getState,
    isActive,
    isHidden,
    isRemoved,
  };
}
