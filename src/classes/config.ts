import { getSimulation } from "./simulation";

interface Config {
  tick: number;
  chunkRadius: number;
  chunkNumber: number;
  entityNumber: number;
}

export const getConfig = (): Config => {
  const simulation = getSimulation();
  return {
    tick: simulation.config.game_tick_limit,
    chunkRadius: simulation.config.chunk_radius,
    chunkNumber: simulation.map.chunk_centers.length,
    entityNumber: Object.values(simulation.unit_factory.created_units).length,
  };
};
