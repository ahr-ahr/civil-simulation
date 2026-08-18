import { createToolManager } from "./tools/toolManager.js";

export function createWorkspace(scene) {
  const toolManager = createToolManager();

  return {
    scene,
    mode: "civil",
    selectedObject: null,
    toolManager,
  };
}
