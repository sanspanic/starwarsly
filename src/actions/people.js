import axios from "axios";
import { LOAD_PERSON } from "./types";

const getPersonFromAPI = (id) => {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    let { name, gender, birth_year: birthYear, homeworld, films } = res.data;

    //removes unnecessary strings from API result so as to create array of numbers
    films = films.map((url) => url.match(/\d+/)[0]);
    homeworld = homeworld.match(/\d+/)[0];

    const person = { id, name, gender, birthYear, homeworld, films };
    dispatch(gotPerson(person));
  };
};

function gotPerson(person) {
  return { type: LOAD_PERSON, payload: person };
}

export { getPersonFromAPI };
