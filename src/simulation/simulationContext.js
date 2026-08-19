export function createSimulationContext({
  deltaTime,
  elapsedTime,
  parameters,
}) {
  return {
    deltaTime,
    elapsedTime,
    parameters,
  };
}
