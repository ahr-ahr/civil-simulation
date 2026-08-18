export function createObjectRegistry() {
  const objects = new Map();

  function register(object) {
    objects.set(object.userData.id, object);
  }

  function unregister(id) {
    objects.delete(id);
  }

  function get(id) {
    return objects.get(id) ?? null;
  }

  function getAll() {
    return Array.from(objects.values());
  }

  function has(id) {
    return objects.has(id);
  }

  function clear() {
    objects.clear();
  }

  return {
    register,
    unregister,
    get,
    getAll,
    has,
    clear,
  };
}
