import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getPersonFromAPI } from "./actions/people";
import Sublist from "./Sublist";

const Person = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector((st) => st.people[id]);
  const planetState = useSelector((st) => st.planets);
  const filmState = useSelector((st) => st.films);
  const missing = !person;

  //triggered when id changes by user accessing new person page
  useEffect(() => {
    //if character not in store yet
    if (missing) {
      dispatch(getPersonFromAPI(id));
    }
  }, [id, missing, dispatch]);

  //loading while API call executes
  if (missing) return "loading...";

  //creates object {id, url, display}
  const hw = person.homeworld;
  const homeworld = {
    id: hw,
    url: `/planets/${hw}`,
    display: planetState[hw] ? planetState[hw].name : "Unknown",
  };

  //creates array of films character is in [ {id, urls, display}, ... ]
  const films = person.films.map((fid) => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown",
  }));

  return (
    <div className="flex flex-col items-start">
      <h1 className="mx-auto mt-5 py-2 text-gradient-only font-black text-4xl md:text-6xl text-center leading-relaxed tracking-wider">
        {person.name}
      </h1>

      <div className="mx-4">
        <p className="text-sunglow-300">
          <b className="text-scarlet-500">Gender: </b>
          {person.gender}
        </p>
        <p className="text-sunglow-300">
          <b className="text-scarlet-500">Birth Year: </b>
          {person.birthYear}
        </p>
        <p className="text-sunglow-300">
          <b className="text-scarlet-500">Homeworld: </b>
          <Link className="underline" to={homeworld.url}>
            {homeworld.display}
          </Link>
        </p>

        <Sublist title="Films" items={films} />
      </div>
    </div>
  );
};

export default Person;
