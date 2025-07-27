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
