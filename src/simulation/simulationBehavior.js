export function createSimulationBehavior({ update = null } = {}) {
  function execute(context, object) {
    if (typeof update !== "function") {
      return;
    }

    update(context, object);
  }

  return {
    execute,
  };
}
