import * as THREE from "three";

import { TOOL_TYPES } from "./tools/toolTypes.js";

export function createWorkspaceInteraction({
  workspace,
  viewport,
  camera,
  world,
  selection,
}) {
  const raycaster = new THREE.Raycaster();

  const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  const selectableObjects = [world.cube];

  workspace.toolManager.setActiveTool(TOOL_TYPES.SELECT);

  function getWorldPoint(event) {
    const rect = viewport.getBoundingClientRect();

    const pointer = new THREE.Vector2();

    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;

    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);

    const point = new THREE.Vector3();

    const hit = raycaster.ray.intersectPlane(groundPlane, point);

    return hit ? point : null;
  }

  function handleSelect(event) {
    const selected = selection.selectAtPointer(event, selectableObjects);

    workspace.selectedObject = selected;

    if (selected) {
      workspace.transform.setTarget(selected);
    } else {
      workspace.transform.clearTarget();
    }
  }

  function handleMeasure(event) {
    const point = getWorldPoint(event);

    if (!point) {
      return;
    }

    const snapped = workspace.snap.snapPosition(point);

    const snappedPoint = new THREE.Vector3(snapped.x, snapped.y, snapped.z);

    const measurement = workspace.measurement;

    if (!measurement.isMeasuring()) {
      measurement.start(snappedPoint);

      return;
    }

    const distance = measurement.finish(snappedPoint);

    console.log(`Distance: ${distance.toFixed(2)} m`);
  }

  function handleClick(event) {
    const activeTool = workspace.toolManager.getActiveTool();

    if (activeTool === TOOL_TYPES.SELECT) {
      handleSelect(event);
      return;
    }

    if (activeTool === TOOL_TYPES.MEASURE) {
      handleMeasure(event);
    }
  }

  viewport.element.addEventListener("click", handleClick);

  return {
    setTool(tool) {
      workspace.toolManager.setActiveTool(tool);

      if (tool !== TOOL_TYPES.MEASURE) {
        workspace.measurement.cancel();
      }
    },

    dispose() {
      viewport.element.removeEventListener("click", handleClick);
    },
  };
}
