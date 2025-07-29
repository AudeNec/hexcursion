import { getSimulation } from "./simulation";

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

export interface EntityGroup {
  name: string;
  quantity: number;
}

export const getAllEntities = (): Entity[] => {
  const simulation = getSimulation();
  return Object.values(simulation.unit_factory.created_units).map((entity) => ({
    id: entity.id,
    name: entity.name,
    startingPosition: { X: entity.X, Y: entity.Y, Z: entity.Z },
    description: entity.description,
    durability: entity.durability,
    age: entity.age,
    sightRadius: entity.sightRadius,
    passability: entity.passability as "passable" | "impassable",
  }));
};

export const getGroupEntities = (): EntityGroup[] => {
  const entities = getAllEntities();
  return entities.reduce(
    (acc: Array<{ name: string; quantity: number }>, entity: Entity) => {
      const existingGroup = acc.find((e) => e.name === entity.name);
      if (existingGroup) {
        existingGroup.quantity += 1;
      } else {
        acc.push({ name: entity.name, quantity: 1 });
      }
      return acc;
    },
    []
  );
};
