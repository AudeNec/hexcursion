import { useEffect, useState } from "react";
// import { getAllEntities } from "./services/getEntity";
// import type { Entity } from "./classes/entity";
import HexMap from "./components/Map";
import { getMap } from "./services/getMap";
import type { Map } from "./classes/map";

export default function App() {
  // const [entities, setEntities] = useState<Array<Entity>>();
  const [map, setMap] = useState<Map>({
    chunkRadius: 3,
    chunkNumber: 1,
    hexList: [],
  });

  useEffect(() => {
    // const entities = getAllEntities();
    // setEntities(entities);
    const map = getMap();
    setMap(map);
  }, []);

  return (
    <>
      <header className="bg-gray-800  flex justify-center">
        <h1 className="text-white p-4 font-bold">Hello!</h1>
      </header>
      <section className="flex justify-center items-start p-4 gap-4">
        <article className="w-1/3 background-gray-100 p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Infos</h2>
          {/* {entities?.map((entity) => (
            <>
              <p>{entity.name}</p>
            </>
          ))} */}
        </article>
        <HexMap tiles={map.hexList} />
        <article className="w-1/3 background-gray-100 p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Infos</h2>
        </article>
      </section>
    </>
  );
}
