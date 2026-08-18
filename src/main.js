import { createScene } from "./core/scene.js";
import { createCamera } from "./core/camera.js";
import { createRenderer, handleRendererResize } from "./core/renderer.js";
import { createLoop } from "./core/loop.js";
import { createWorld } from "./world/world.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { createViewport } from "./workspace/viewport.js";

const scene = createScene();

const camera = createCamera();

const renderer = createRenderer();

document.body.appendChild(renderer.domElement);
const viewport = createViewport(renderer);

const controls = new OrbitControls(camera, renderer.domElement);

controls.target.set(0, 0, 0);
controls.update();

createWorld(scene);

window.addEventListener("resize", () => {
  handleRendererResize(renderer, camera);
});

const loop = createLoop(() => {
  renderer.render(scene, camera);
});

loop.start();
