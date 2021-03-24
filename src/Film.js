import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getFilmFromAPI } from "./actions/films";
import Sublist from "./Sublist";

//film detail page where planets and people list items render conditonally based on if already in store or not
const Film = () => {
  const { id } = useParams();
  const film = useSelector((st) => st.films[id]);
  const planetState = useSelector((st) => st.planets);
  const characterState = useSelector((st) => st.people);
  const dispatch = useDispatch();
  const missing = !film;
  const [isAnimating, setIsAnimating] = useState(false);

  //triggered when id changes by user accessing new film page
  useEffect(() => {
    //if film is not in store yet
    if (missing) {
      dispatch(getFilmFromAPI(id));
      setIsAnimating(true);
    }
  }, [missing, id, dispatch]);

  //loads while API call executing
  if (missing) return <h1 className="mt-5">loading...</h1>;

  const planets = film.planets.map((pid) => ({
    id: pid,
    url: `/planets/${pid}`,
    display: planetState[pid] ? planetState[pid].name : "Unknown",
  }));

  const characters = film.characters.map((cid) => ({
    id: cid,
    url: `/people/${cid}`,
    display: characterState[cid] ? characterState[cid].name : "Unknown",
  }));

  const handleEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center py-3">
        <h1 className="mt-5 py-2 pb-4 text-gradient-only font-black text-4xl md:text-6xl text-center leading-relaxed tracking-wider">
          {film.name}
        </h1>
        {isAnimating && (
          <button
            onClick={handleEnd}
            className="text-xs my-5 bg-gradient-yellow inline-flex items-center border-2 border-white py-1 px-3 rounded text-black mt-4 md:mt-0"
          >
            Skip Animation
          </button>
        )}
      </div>

      <div className="overflow-hidden mx-4 flex flex-col justify-center items-center">
        {isAnimating && (
          <>
            <section class="star-wars">
              <div onAnimationEnd={handleEnd} class="crawl">
                <div class="title">
                  <h1 className="text-center mb-10">{film.name}</h1>
                </div>
                <p>{film.openingCrawl}</p>
              </div>
            </section>
          </>
        )}
        {!isAnimating && (
          <div className="self-start text-sunglow-300 max-w-prose">
            <p className="text-sunglow-300 max-w-prose">{film.openingCrawl}</p>

            <p className="py-5">
              <b className="text-scarlet-500">Director: </b>
              {film.director}
            </p>

            <Sublist title="Planets" items={planets} />
            <Sublist title="People" items={characters} />
            {id < 6 ? (
              <Link
                className="text-scarlet-500 font-bold underline"
                to={`/films/${+id + 1}`}
              >
                Explore Next Movie
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Film;
