export function createToolManager() {
  let activeTool = null;

  return {
    getActiveTool() {
      return activeTool;
    },

    setActiveTool(tool) {
      activeTool = tool;
    },

    clearActiveTool() {
      activeTool = null;
    },
  };
}
