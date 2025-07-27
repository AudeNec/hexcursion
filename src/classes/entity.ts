export interface Entity {
  id: string;
  name: string;
  startingPosition: { X: number; Y: number; Z: number };
  description: string;
  durability: number;
  age: number;
  sightRadius: number;
  passability: "passable" | "impassable";
}
