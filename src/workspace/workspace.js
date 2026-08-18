import { createToolManager } from "./tools/toolManager.js";
import { createTransformSystem } from "./transform.js";
import { createMeasurementSystem } from "./measurement.js";

export function createWorkspace(scene) {
  const toolManager = createToolManager();
  const transform = createTransformSystem();
  const measurement = createMeasurementSystem();

  return {
    scene,
    mode: "civil",
    selectedObject: null,
    toolManager,
    transform,
    measurement,
  };
}
