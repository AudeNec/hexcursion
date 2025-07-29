import type { Position } from "./map";

import { isDefined } from "@/services/help.service";
import { getSimulation } from "./simulation";

type Effect = {
  id: string;
  name: string;
};

export type EntityEffectsTimestamp = {
  thingId: string;
  effectApplied: Array<string | Effect>;
  stateDescription: Array<string>;
  position: Position;
};

export type GlobalTimestamp = {
  tick: number;
  effectsApplied: Array<EntityEffectsTimestamp> | undefined;
};

export type GlobalTimeline = Array<GlobalTimestamp>;

export const getTimeStamp = (tick: number): GlobalTimestamp => {
  const simulation = getSimulation();

  const entityEffects: Array<EntityEffectsTimestamp> = Object.values(
    simulation.chronology.thing_chronologies
  )
    .map(({ timeline }) => {
      if (timeline[tick])
        return {
          thingId: timeline[tick].thing_id,
          effectApplied: timeline[tick].effect_applied,
          stateDescription: timeline[tick].state_description,
          position: {
            X: tick,
            Y: tick,
            Z: tick,
          },
        };
    })
    .filter(isDefined);

  return {
    tick,
    effectsApplied: entityEffects ?? undefined,
  };
};

export const getGlobalTimeline = (): GlobalTimeline => {
  const simulation = getSimulation();
  const maxTick = simulation.config.game_tick_limit;

  const globalTimeline: GlobalTimeline = [];

  for (let tick = 0; tick <= maxTick; tick++) {
    globalTimeline.push(getTimeStamp(tick));
  }

  return globalTimeline;
};

export const getCellEffectsOnTimeStamp = (
  tick: number,
  cell: Position
): string[] | undefined => {
  const tickData: GlobalTimestamp = getTimeStamp(tick);
  const cellData = tickData.effectsApplied?.filter(
    ({ position }) => position.X === cell.X && position.Y === cell.Y
  );

  return cellData?.flatMap((entityEffects) =>
    entityEffects.stateDescription.flat()
  );
};
