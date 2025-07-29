import simulation from "../assets/simulation.json";

export type Simulation = {
  name: string;
  config: {
    game_tick_limit: number;
    visualisation: boolean;
    chunk_radius: number;
  };
  chronology: {
    thing_chronologies: {
      [thingId: string]: {
        tick_started: number;
        tick_finished: number;
        alive: boolean;
        thing_id: string;
        timeline: {
          thing_id: string;
          effect_applied: string[];
          action_taken: string[];
          state_description: string[];
        }[];
      };
    };
  };
  map: {
    hex_list: Array<{
      X: number;
      Y: number;
      Z: number;
      oddr_X: number;
      oddr_Y: number;
      oddr_Z: number;
      cell_id: number;
      Occupied: boolean;
      terrain_elevation: number;
      is_water_hex: boolean;
      is_forest_cell: boolean;
      is_fruit_cell: boolean;
      visibility: number;
      polygon: [number, number][];
      chunk_origin: [number, number];
    }>;
    chunk_centers: Array<Array<Array<number>>>;
  };
  unit_factory: {
    created_units: {
      [thingId: string]: {
        id: string;
        name: string;
        X: number;
        Y: number;
        Z: number;
        oddr_X: number;
        oddr_Y: number;
        oddr_Z: number;
        description: string;
        durability: number;
        age: number;
        sightRadius: number;
        passability: "passable" | "impassable";
        created_at: string;
        updated_at: string;
      };
    };
  };
};

export const getSimulation = () => {
  return simulation as Simulation;
};
