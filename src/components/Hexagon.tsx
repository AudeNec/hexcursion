import type { Hexagon } from "@/classes/map";
import React from "react";

const getChunkColor = ([cx, cy]: [number, number]): string => {
  const hash = Math.abs(cx * 31 + cy * 17);
  const hue = hash % 360;
  return `hsl(${hue}, 60%, 70%)`;
};
type HexTileProps = {
  tile: Hexagon;
  isSelected?: boolean;
  isHovered?: boolean;
  onClick?: (tile: Hexagon) => void;
  onHoverEnter?: () => void;
  onHoverLeave?: () => void;
};

export const HexTile = React.memo((props: HexTileProps) => {
  const { tile, isSelected, isHovered, onClick, onHoverEnter, onHoverLeave } =
    props;
  const baseColor = getChunkColor(tile.chunkOrigin);
  const fill = isHovered ? "#ffff66" : isSelected ? "#333" : baseColor;

  const points = tile.polygon.map(([x, y]) => `${x},${y}`).join(" ");

  return (
    <polygon
      points={points}
      fill={fill}
      stroke="#888"
      strokeWidth={0.25}
      onClick={() => onClick?.(tile)}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    />
  );
});
