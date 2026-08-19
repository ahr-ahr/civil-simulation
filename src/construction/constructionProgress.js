import { createConstructionProcess } from "./constructionProcess.js";

export function createConstructionProgress({ duration = 0 } = {}) {
  const process = createConstructionProcess({
    duration,
  });

  function start() {
    process.start();
  }

  function update(deltaTime) {
    process.update(deltaTime);
  }

  function reset() {
    process.reset();
  }

  function getProgress() {
    return process.getState().progress;
  }

  function getPercentage() {
    return getProgress() * 100;
  }

  function getState() {
    return process.getState();
  }

  function isComplete() {
    return process.isComplete();
  }

  return {
    start,
    update,
    reset,
    getProgress,
    getPercentage,
    getState,
    isComplete,
  };
}
