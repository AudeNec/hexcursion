import { getCellEffectsOnTimeStamp } from "@/classes/timeline";
import { useSelectedCell } from "@/context/selectedCell";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface LeftBannerProps {
  tick: number;
}

export default function LeftBanner({ tick }: LeftBannerProps) {
  const { selectedCell } = useSelectedCell();

  const stateDescriptions = selectedCell
    ? getCellEffectsOnTimeStamp(tick, selectedCell)
    : [];

  return (
    <Card className="w-1/4 p-4">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Cell infos</CardTitle>
        <CardDescription>
          {selectedCell ? `(${selectedCell.X}, ${selectedCell.Y})` : ""}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm flex flex-col gap-2">
        {stateDescriptions && stateDescriptions.length > 0 ? (
          stateDescriptions.map((state) => <p>{state}</p>)
        ) : (
          <p>Hover a cell to see infos</p>
        )}
      </CardContent>
    </Card>
  );
}
