import React from "react";

import type { Hexagon } from "@/classes/map";

import { getChunkColor } from "@/services/hexagon.service";
import { useSelectedCell } from "@/context/selectedCell";

type HexTileProps = {
  tile: Hexagon;
  onClick?: (tile: Hexagon) => void;
};

export const HexTile = React.memo(({ tile, onClick }: HexTileProps) => {
  const { setSelectedCell } = useSelectedCell();
  const baseColor = getChunkColor(tile.chunkOrigin);
  const points = tile.polygon.map(([x, y]) => `${x},${y}`).join(" ");

  return (
    <polygon
      points={points}
      fill={baseColor}
      stroke={"gray-950"}
      strokeWidth={0.25}
      onClick={() => onClick?.(tile)}
      onMouseEnter={() => setSelectedCell({ X: tile.X, Y: tile.Y })}
      onMouseLeave={() => setSelectedCell(null)}
      className="hover:cursor-pointer hover:opacity-60 transition-all"
    />
  );
});
