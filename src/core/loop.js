import * as THREE from "three";

export function createLoop(render) {
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const deltaTime = clock.getDelta();

    render(deltaTime);
  }

  return {
    start: animate,
  };
}
