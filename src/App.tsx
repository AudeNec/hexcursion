import { useState } from "react";

import { getGroupEntities, type EntityGroup } from "./classes/entity";
import Header from "./components/Header";
import LeftBanner from "./components/LeftBanner";
import MapHolder from "./components/MapHolder";

export default function App() {
  const [groupEntities, _setGroupEntities] = useState<Array<EntityGroup>>(() =>
    getGroupEntities()
  );
  const [tick, setTick] = useState<number>(0);

  if (!groupEntities) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <section className="flex justify-center items-start p-4 gap-4">
        <LeftBanner tick={tick} />
        <MapHolder setTick={setTick} />
        <article className="w-1/4 background-gray-100 p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            General infos on the simulation
          </h2>
          {groupEntities.map((typeEntity: EntityGroup) => (
            <>
              <p>{typeEntity.name}</p>
              <p className="text-gray-500">Quantity: {typeEntity.quantity}</p>
            </>
          ))}
        </article>
      </section>
    </div>
  );
}
