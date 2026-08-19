export function createSimulationEvents() {
  const listeners = new Map();

  function on(event, listener) {
    if (!listeners.has(event)) {
      listeners.set(event, new Set());
    }

    listeners.get(event).add(listener);

    return () => {
      off(event, listener);
    };
  }

  function off(event, listener) {
    const eventListeners = listeners.get(event);

    if (!eventListeners) {
      return;
    }

    eventListeners.delete(listener);

    if (eventListeners.size === 0) {
      listeners.delete(event);
    }
  }

  function emit(event, payload) {
    const eventListeners = listeners.get(event);

    if (!eventListeners) {
      return;
    }

    for (const listener of eventListeners) {
      listener(payload);
    }
  }

  function clear() {
    listeners.clear();
  }

  return {
    on,
    off,
    emit,
    clear,
  };
}
