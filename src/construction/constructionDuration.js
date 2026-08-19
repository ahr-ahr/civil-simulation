export function createConstructionDuration(duration = 0) {
  let elapsedTime = 0;

  function update(deltaTime) {
    if (duration <= 0) {
      elapsedTime = duration;
      return;
    }

    elapsedTime += deltaTime;

    if (elapsedTime > duration) {
      elapsedTime = duration;
    }
  }

  function reset() {
    elapsedTime = 0;
  }

  function getDuration() {
    return duration;
  }

  function getElapsedTime() {
    return elapsedTime;
  }

  function getProgress() {
    if (duration <= 0) {
      return 1;
    }

    return elapsedTime / duration;
  }

  function isComplete() {
    return elapsedTime >= duration;
  }

  return {
    update,
    reset,
    getDuration,
    getElapsedTime,
    getProgress,
    isComplete,
  };
}
