import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { resetAll } from "./actions/reset";

function HomePage() {
  const loaded = useSelector((st) => st.films[1] !== undefined);
  const dispatch = useDispatch();

  function reset() {
    dispatch(resetAll());
  }

  return (
    <div className="flex flex-col items-center justify-evenly">
      <img
        className="mt-3 w-12/12 sm:w-5/12"
        alt="StarWars.ly"
        src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg"
      />
      {loaded ? (
        <button
          className="text-gradient font-mono font-black bg-black mt-20 p-2 text-4xl mx-auto"
          onClick={reset}
        >
          Reset To Fresh Exploration
        </button>
      ) : (
        <Link
          to="/films/1"
          className="text-gradient font-mono font-black bg-black mt-20 p-2 text-xl md:text-4xl mx-auto "
        >
          Explore &ldquo;A New Hope&rdquo;
        </Link>
      )}
    </div>
  );
}

export default HomePage;
