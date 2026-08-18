import * as THREE from "three";

export function createMeasurementSystem() {
  const startPoint = new THREE.Vector3();
  const endPoint = new THREE.Vector3();

  let measuring = false;

  function start(point) {
    startPoint.copy(point);
    endPoint.copy(point);
    measuring = true;
  }

  function update(point) {
    if (!measuring) return;

    endPoint.copy(point);
  }

  function finish(point) {
    if (!measuring) return null;

    endPoint.copy(point);
    measuring = false;

    return getDistance();
  }

  function getDistance() {
    return startPoint.distanceTo(endPoint);
  }

  function getStartPoint() {
    return startPoint.clone();
  }

  function getEndPoint() {
    return endPoint.clone();
  }

  function isMeasuring() {
    return measuring;
  }

  function cancel() {
    measuring = false;
  }

  return {
    start,
    update,
    finish,
    getDistance,
    getStartPoint,
    getEndPoint,
    isMeasuring,
    cancel,
  };
}
