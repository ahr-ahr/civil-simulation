export function createSimulationClock() {
  let elapsedTime = 0;

  function update(deltaTime, timeScale = 1) {
    elapsedTime += deltaTime * timeScale;
  }

  function getElapsedTime() {
    return elapsedTime;
  }

  function reset() {
    elapsedTime = 0;
  }

  return {
    update,
    getElapsedTime,
    reset,
  };
}
