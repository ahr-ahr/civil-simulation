import * as THREE from "three";

export function createSelectionSystem(camera, viewport) {
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  let selectedObject = null;

  function selectAtPointer(event, objects) {
    const rect = viewport.getBoundingClientRect();

    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;

    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);

    const intersections = raycaster.intersectObjects(objects, true);

    selectedObject = intersections.length > 0 ? intersections[0].object : null;

    return selectedObject;
  }

  function getSelectedObject() {
    return selectedObject;
  }

  function clearSelection() {
    selectedObject = null;
  }

  return {
    selectAtPointer,
    getSelectedObject,
    clearSelection,
  };
}
