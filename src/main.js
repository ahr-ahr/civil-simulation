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
import { createSimulationCommands } from "./simulation/simulationCommands.js";
import { createSimulationRuntimeControls } from "./simulation/simulationRuntimeControls.js";
import { createCivilObjectManager } from "./civil/objects/civilObjectManager.js";
import { createSimulationObject } from "./simulation/simulationObject.js";
import { createSimulationBehavior } from "./simulation/simulationBehavior.js";
import { createBuilding } from "./civil/objects/building.js";

const scene = createScene();
const objectManager = createCivilObjectManager(scene);
const simulation = createSimulationEngine();
const commands = createSimulationCommands(simulation);

const runtimeControls = createSimulationRuntimeControls({
  commands,
});

runtimeControls.attach();
const camera = createCamera();
const renderer = createRenderer();

document.body.appendChild(renderer.domElement);
const viewport = createViewport(renderer);
const workspace = createWorkspace(scene);
const controls = new OrbitControls(camera, renderer.domElement);

controls.target.set(0, 0, 0);
controls.update();

const world = createWorld(scene);
const building = createBuilding({
  id: "building-001",
  name: "Simulation Building",
});

objectManager.add(building);

const simulationObject = createSimulationObject(building);

const behavior = createSimulationBehavior({
  update(context, object) {
    object.position.x += context.deltaTime * 2;
  },
});

simulationObject.setBehavior(behavior);

simulation.addObject(simulationObject);
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
