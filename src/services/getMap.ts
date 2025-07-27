import { simulation } from "@/assets/simulation";
import type { Map } from "@/classes/map";

export function hexToPixel(q: number, r: number, size: number) {
  const x = size * Math.sqrt(3) * (q + r / 2);
  const y = size * 1.5 * r;
  return { x, y };
}

export const getMap = (): Map => {
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
