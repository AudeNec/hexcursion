import { getSimulation } from "./simulation";

export interface Map {
  chunkRadius: number;
  chunkNumber: number;
  hexList: Array<Hexagon>;
}

export type Hexagon = {
  X: number;
  Y: number;
  Z: number;
  cellId: number;
  occupied: boolean;
  terrainElevation: number;
  isWater: boolean;
  isForest: boolean;
  isFruit: boolean;
  visibility: number;
  polygon: [number, number][];
  chunkOrigin: [number, number];
};

export interface Position {
  X: number;
  Y: number;
  Z?: number;
}

export const getMap = (): Map => {
  const simulation = getSimulation();

  return {
    chunkRadius: simulation.config.chunk_radius,
    chunkNumber: simulation.map.chunk_centers[0].length,
    hexList: simulation.map.hex_list.map((hex) => ({
      X: hex.X,
      Y: hex.Y,
      Z: hex.Z,
      cellId: hex.cell_id,
      occupied: hex.Occupied,
      terrainElevation: hex.terrain_elevation,
      isWater: hex.is_water_hex,
      isForest: hex.is_forest_cell,
      isFruit: hex.is_fruit_cell,
      visibility: hex.visibility,
      polygon: hex.polygon,
      chunkOrigin: hex.chunk_origin,
    })),
  };
};
