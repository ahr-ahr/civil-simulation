import * as THREE from "three";

export function createLoop(render) {
  const timer = new THREE.Timer();

  function animate(time) {
    requestAnimationFrame(animate);

    timer.update(time);

    const deltaTime = timer.getDelta();

    render(deltaTime);
  }

  return {
    start: () => {
      requestAnimationFrame(animate);
    },
  };
}
