import { createToolManager } from "./tools/toolManager.js";
import { createTransformSystem } from "./transform.js";

export function createWorkspace(scene) {
  const toolManager = createToolManager();
  const transform = createTransformSystem();

  return {
    scene,
    mode: "civil",
    selectedObject: null,
    toolManager,
    transform,
  };
}
