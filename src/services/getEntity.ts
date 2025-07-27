import { simulation } from "@/assets/simulation";

export const getAllEntities = () => {
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
