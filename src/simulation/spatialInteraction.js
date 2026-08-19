export function createSpatialInteraction() {
  let activeInteraction = null;

  function begin(type, objectId = null) {
    activeInteraction = {
      type,
      objectId,
      active: true,
    };
  }

  function update(data = {}) {
    if (!activeInteraction) {
      return;
    }

    activeInteraction = {
      ...activeInteraction,
      ...data,
    };
  }

  function end() {
    if (!activeInteraction) {
      return null;
    }

    const interaction = {
      ...activeInteraction,
    };

    activeInteraction = null;

    return interaction;
  }

  function getActive() {
    if (!activeInteraction) {
      return null;
    }

    return {
      ...activeInteraction,
    };
  }

  function isActive() {
    return activeInteraction !== null;
  }

  return {
    begin,
    update,
    end,
    getActive,
    isActive,
  };
}
