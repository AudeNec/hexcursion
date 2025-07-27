export type EntityTimeline = Array<{
  thingId: string;
  effectApplied: Array<string>;
  stateDescription: Array<string>;
  tick: number;
}>;

export type GlobalTimeline = Array<{
  tick: number;
  effectsApplied: Array<string>;
}>;
