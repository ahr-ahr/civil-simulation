export function createConstructionState() {
  let status = "pending";
  let progress = 0;

  function start() {
    status = "in_progress";
  }

  function complete() {
    status = "completed";
    progress = 1;
  }

  function reset() {
    status = "pending";
    progress = 0;
  }

  function setProgress(value) {
    progress = Math.max(0, Math.min(1, value));

    if (progress === 0) {
      status = "pending";
    } else if (progress < 1) {
      status = "in_progress";
    } else {
      status = "completed";
    }
  }

  function getStatus() {
    return status;
  }

  function getProgress() {
    return progress;
  }

  function getState() {
    return {
      status,
      progress,
    };
  }

  return {
    start,
    complete,
    reset,
    setProgress,
    getStatus,
    getProgress,
    getState,
  };
}
