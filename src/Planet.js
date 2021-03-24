import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getPlanetFromAPI } from "./actions/planets";
import Sublist from "./Sublist";

const Planet = () => {
  const { id } = useParams();
  const planet = useSelector((st) => st.planets[id]);
  const filmState = useSelector((st) => st.films);
  const characterState = useSelector((st) => st.people);
  const dispatch = useDispatch();
  const missing = !planet;

  //triggered when id changes by user accessing new planet page
  useEffect(
    function () {
      //if planet not yet in store
      if (missing) {
        dispatch(getPlanetFromAPI(id));
      }
    },
    [missing, id, dispatch]
  );

  //loading while API call executes
  if (missing) return "loading...";

  //creates films array [ {id, url, displays }, ...]
  const films = planet.films.map((fid) => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown",
  }));

  //creates residents array [ {id, url, displays }, ...]
  const residents = planet.residents.map((pid) => ({
    id: pid,
    url: `/people/${pid}`,
    display: characterState[pid] ? characterState[pid].name : "Unknown",
  }));

  return (
    <div className="flex flex-col py-3">
      <h1 className="mx-auto mt-5 py-2 text-gradient-only font-black text-4xl md:text-6xl text-center leading-relaxed tracking-wider">
        {planet.name}
      </h1>

      <div className="self-start mx-4">
        <p className="text-sunglow-300">
          <b className="text-scarlet-500">Climate: </b>
          {planet.climate}
        </p>
        <p className="text-sunglow-300">
          <b className="text-scarlet-500">Population: </b>
          {planet.population}
        </p>

        <Sublist title="People" items={residents} />
        <Sublist title="Films" items={films} />
      </div>
    </div>
  );
};

export default Planet;
