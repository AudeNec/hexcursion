import { getMap, type Map } from "../classes/map";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import HexMap from "./Map";

interface MapHolderProps {
  setTick: React.Dispatch<React.SetStateAction<number>>;
}

export default function MapHolder({ setTick }: MapHolderProps) {
  const [map, _setMap] = useState<Map>(() => getMap());

  if (!map)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );

  return (
    <article className="flex flex-col w-1/2 gap-4">
      <HexMap tiles={map.hexList} />
      <h3>Timeline:</h3>
      <Slider
        defaultValue={[0]}
        max={80}
        step={1}
        className={`${cn("w-[60%]")} w-full`}
        onValueChange={(value: number[]) => setTick(value[0])}
      />
    </article>
  );
}
