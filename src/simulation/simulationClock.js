export function createSimulationClock() {
  let elapsedTime = 0;
  let timeScale = 1;

  function update(deltaTime) {
    elapsedTime += deltaTime * timeScale;
  }

  function setTimeScale(scale) {
    if (scale < 0) {
      return;
    }

    timeScale = scale;
  }

  function getTimeScale() {
    return timeScale;
  }

  function getElapsedTime() {
    return elapsedTime;
  }

  function reset() {
    elapsedTime = 0;
  }

  return {
    update,
    setTimeScale,
    getTimeScale,
    getElapsedTime,
    reset,
  };
}
