export function createViewport(renderer) {
  const element = renderer.domElement;

  element.classList.add("civil-viewport");

  return {
    element,

    getBoundingClientRect() {
      return element.getBoundingClientRect();
    },
  };
}
