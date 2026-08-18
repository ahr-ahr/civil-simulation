export function createLoop(render) {
  function animate() {
    requestAnimationFrame(animate);

    render();
  }

  return {
    start: animate,
  };
}
