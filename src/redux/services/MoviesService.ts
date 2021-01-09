import { handleResponse } from './HandleResponse';
import axios from "axios";

export const userService = { getAllMovies }

async function getAllMovies() {
  try {
    dispatch({
      type: POKEMON_LOADING
    })

    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);

    dispatch({
      type: POKEMON_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: POKEMON_FAIL
    })
  }
}