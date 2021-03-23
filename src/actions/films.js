import axios from "axios";
import { LOAD_FILM } from "./types";

const getFilmFromAPI = (id) => {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
    let {
      title: name,
      director,
      opening_crawl: openingCrawl,
      characters,
      planets,
    } = res.data;

    //removes unnecessary strings from API result so as to create array of numbers
    characters = characters.map((url) => url.match(/\d+/)[0]);
    planets = planets.map((url) => url.match(/\d+/)[0]);

    const film = { id, name, director, openingCrawl, characters, planets };
    dispatch(gotFilm(film));
  };
};

const gotFilm = (film) => {
  return { type: LOAD_FILM, payload: film };
};

export { getFilmFromAPI };
