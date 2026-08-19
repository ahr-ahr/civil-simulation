import { createConstructionState } from "./constructionState.js";
import { createConstructionDuration } from "./constructionDuration.js";

export function createConstructionProcess({ duration = 0 } = {}) {
  const state = createConstructionState();

  const time = createConstructionDuration(duration);

  function start() {
    state.start();
  }

  function update(deltaTime) {
    if (state.getStatus() !== "in_progress") {
      return;
    }

    time.update(deltaTime);

    state.setProgress(time.getProgress());

    if (time.isComplete()) {
      state.complete();
    }
  }

  function reset() {
    time.reset();
    state.reset();
  }

  function getState() {
    return {
      ...state.getState(),
      elapsedTime: time.getElapsedTime(),
      duration: time.getDuration(),
    };
  }

  function isComplete() {
    return state.getStatus() === "completed";
  }

  return {
    start,
    update,
    reset,
    getState,
    isComplete,
  };
}
