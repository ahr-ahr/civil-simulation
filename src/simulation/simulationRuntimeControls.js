import { SIMULATION_COMMANDS } from "./simulationCommands.js";

export function createSimulationRuntimeControls({
  commands,
  target = window,
} = {}) {
  function handleKeyDown(event) {
    switch (event.key.toLowerCase()) {
      case "s":
        commands.execute(SIMULATION_COMMANDS.START);
        break;

      case "p":
        commands.execute(SIMULATION_COMMANDS.PAUSE);
        break;

      case "r":
        commands.execute(SIMULATION_COMMANDS.RESUME);
        break;

      case "0":
        commands.execute(SIMULATION_COMMANDS.RESET);
        break;

      case "c":
        commands.execute(SIMULATION_COMMANDS.COMPLETE);
        break;
    }
  }

  function attach() {
    target.addEventListener("keydown", handleKeyDown);
  }

  function detach() {
    target.removeEventListener("keydown", handleKeyDown);
  }

  return {
    attach,
    detach,
  };
}
