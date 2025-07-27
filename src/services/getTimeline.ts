import { simulation } from "@/assets/simulation";
import type { EntityTimeline } from "@/classes/timeline";

export const getEntityTimeline = (id: string): EntityTimeline => {
  return simulation.chronology.thing_chronologies[`${id}`].timeline.map(
    ({ thing_id, effect_applied, state_description }, index) => ({
      thingId: thing_id,
      effectApplied: effect_applied,
      stateDescription: state_description,
      tick: index + 1,
    })
  );
};
