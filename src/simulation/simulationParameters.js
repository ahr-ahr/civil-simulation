export function createSimulationParameters() {
  const parameters = {
    timeScale: 1,
    gravity: 9.81,
  };

  function setTimeScale(value) {
    if (value < 0) {
      return;
    }

    parameters.timeScale = value;
  }

  function getTimeScale() {
    return parameters.timeScale;
  }

  function setGravity(value) {
    parameters.gravity = value;
  }

  function getGravity() {
    return parameters.gravity;
  }

  function getAll() {
    return {
      ...parameters,
    };
  }

  return {
    setTimeScale,
    getTimeScale,
    setGravity,
    getGravity,
    getAll,
  };
}
