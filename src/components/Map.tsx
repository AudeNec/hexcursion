import type { Hexagon } from "@/classes/map";

import { HexTile } from "./Hexagon";

const HexMap = ({ tiles }: { tiles: Array<Hexagon> }) => {
  const minX = Math.min(...tiles.flatMap((t) => t.polygon.map((p) => p[0])));
  const maxX = Math.max(...tiles.flatMap((t) => t.polygon.map((p) => p[0])));
  const minY = Math.min(...tiles.flatMap((t) => t.polygon.map((p) => p[1])));
  const maxY = Math.max(...tiles.flatMap((t) => t.polygon.map((p) => p[1])));

  return (
    <div className="w-[800px] h-[600px] w-full overflow-scroll border rounded-xl">
      <svg
        width={2000}
        height={2000}
        viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`}
        className="block"
      >
        {tiles.map((tile) => (
          <HexTile key={tile.cellId} tile={tile} />
        ))}
      </svg>
    </div>
  );
};

export default HexMap;
