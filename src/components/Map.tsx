import { useState } from "react";
import { HexTile } from "./Hexagon";
import type { Hexagon } from "@/classes/map";

const HexMap = ({ tiles }: { tiles: Array<Hexagon> }) => {
  const [selectedCellId, setSelectedCellId] = useState<number | null>(null);
  const [hoveredCellId, setHoveredCellId] = useState<number | null>(null);

  const minX =
    Math.min(...tiles.flatMap((t) => t.polygon.map((p) => p[0]))) / 2;
  const maxX =
    Math.max(...tiles.flatMap((t) => t.polygon.map((p) => p[0]))) / 2;
  const minY =
    Math.min(...tiles.flatMap((t) => t.polygon.map((p) => p[1]))) / 2;
  const maxY =
    Math.max(...tiles.flatMap((t) => t.polygon.map((p) => p[1]))) / 2;

  return (
    <div className="w-[800px] h-[600px] w-full overflow-scroll border shadow-lg">
      <svg
        width={1000}
        height={1000}
        viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`}
        className="block"
      >
        {tiles.map((tile) => (
          <HexTile
            key={tile.cellId}
            tile={tile}
            isSelected={tile.cellId === selectedCellId}
            isHovered={tile.cellId === hoveredCellId}
            onClick={() => setSelectedCellId(tile.cellId)}
            onHoverEnter={() => setHoveredCellId(tile.cellId)}
            onHoverLeave={() => setHoveredCellId(null)}
          />
        ))}
      </svg>
    </div>
  );
};

export default HexMap;
