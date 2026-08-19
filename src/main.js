import { createScene } from "./core/scene.js";
import { createCamera } from "./core/camera.js";
import { createRenderer, handleRendererResize } from "./core/renderer.js";
import { createLoop } from "./core/loop.js";
import { createWorld } from "./world/world.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { createViewport } from "./workspace/viewport.js";
import { createWorkspace } from "./workspace/workspace.js";
import { createSelectionSystem } from "./workspace/selection.js";
import { createWorkspaceInteraction } from "./workspace/workspaceInteraction.js";
import { TOOL_TYPES } from "./workspace/tools/toolTypes.js";
import { createSimulationEngine } from "./simulation/simulationEngine.js";

const scene = createScene();
const simulation = createSimulationEngine();
const camera = createCamera();
const renderer = createRenderer();

document.body.appendChild(renderer.domElement);
const viewport = createViewport(renderer);
const workspace = createWorkspace(scene);
const controls = new OrbitControls(camera, renderer.domElement);

controls.target.set(0, 0, 0);
controls.update();

const world = createWorld(scene);
const selection = createSelectionSystem(camera, viewport);
const interaction = createWorkspaceInteraction({
  workspace,
  viewport,
  camera,
  world,
  selection,
});

window.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    interaction.setTool(TOOL_TYPES.SELECT);
  }

  if (event.key === "2") {
    interaction.setTool(TOOL_TYPES.MEASURE);
  }
});

window.addEventListener("resize", () => {
  handleRendererResize(renderer, camera);
});

const loop = createLoop((deltaTime) => {
  simulation.update(deltaTime);
  renderer.render(scene, camera);
});

loop.start();
