export function createScenarioObject({
  id,
  type,
  name = "",
  transform = {},
  data = {},
} = {}) {
  let object = {
    id: id ?? null,
    type: type ?? "unknown",
    name,
    transform: {
      position: {
        x: transform.position?.x ?? 0,
        y: transform.position?.y ?? 0,
        z: transform.position?.z ?? 0,
      },

      rotation: {
        x: transform.rotation?.x ?? 0,
        y: transform.rotation?.y ?? 0,
        z: transform.rotation?.z ?? 0,
      },

      scale: {
        x: transform.scale?.x ?? 1,
        y: transform.scale?.y ?? 1,
        z: transform.scale?.z ?? 1,
      },
    },

    data: {
      ...data,
    },
  };

  function setName(value) {
    object.name = value;
  }

  function setTransform(transform) {
    object.transform = {
      position: {
        x: transform.position?.x ?? 0,
        y: transform.position?.y ?? 0,
        z: transform.position?.z ?? 0,
      },

      rotation: {
        x: transform.rotation?.x ?? 0,
        y: transform.rotation?.y ?? 0,
        z: transform.rotation?.z ?? 0,
      },

      scale: {
        x: transform.scale?.x ?? 1,
        y: transform.scale?.y ?? 1,
        z: transform.scale?.z ?? 1,
      },
    };
  }

  function setData(data) {
    object.data = {
      ...object.data,
      ...data,
    };
  }

  function getState() {
    return {
      id: object.id,
      type: object.type,
      name: object.name,

      transform: {
        position: {
          ...object.transform.position,
        },

        rotation: {
          ...object.transform.rotation,
        },

        scale: {
          ...object.transform.scale,
        },
      },

      data: {
        ...object.data,
      },
    };
  }

  return {
    setName,
    setTransform,
    setData,
    getState,
  };
}
