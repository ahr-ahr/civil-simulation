export const SIMULATION_COMMANDS = {
  START: "start",
  PAUSE: "pause",
  RESUME: "resume",
  RESET: "reset",
  COMPLETE: "complete",
};

export function createSimulationCommands(engine) {
  function execute(command) {
    switch (command) {
      case SIMULATION_COMMANDS.START:
        engine.start();
        break;

      case SIMULATION_COMMANDS.PAUSE:
        engine.pause();
        break;

      case SIMULATION_COMMANDS.RESUME:
        engine.resume();
        break;

      case SIMULATION_COMMANDS.RESET:
        engine.reset();
        break;

      case SIMULATION_COMMANDS.COMPLETE:
        engine.complete();
        break;

      default:
        throw new Error(`Unknown simulation command: ${command}`);
    }
  }

  return {
    execute,
  };
}
