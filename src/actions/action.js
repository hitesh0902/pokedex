import axios from "axios";
import {
  ADD_POKEMON_FAVORITE,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  REMOVE_POKEMON_FAVORITE,
} from "./actionTypes";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = (limit = 10) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}?limit=${limit}`);
    // console.log(response.data);
    const pokemons = await Promise.all(
      response.data.results.map(async (p) => {
        const pokemonRecord = await axios.get(p.url);
        return pokemonRecord.data;
      })
    );
    // console.log(pokemons);
    dispatch({
      type: GET_POKEMONS,
      payload: {
        pokemons,
        next: response.data.next,
        previous: response.data.previous,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getNextPokemons = (nextUrl) => async (dispatch) => {
  try {
    const response = await axios.get(nextUrl);
    // console.log(response.data);
    const pokemons = await Promise.all(
      response.data.results.map(async (p) => {
        const pokemonRecord = await axios.get(p.url);
        return pokemonRecord.data;
      })
    );
    // console.log(pokemons);
    dispatch({
      type: GET_POKEMONS,
      payload: {
        pokemons,
        next: response.data.next,
        previous: response.data.previous,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPreviousPokemons = (previousUrl) => async (dispatch) => {
  try {
    const response = await axios.get(previousUrl);
    // console.log(response.data);
    const pokemons = await Promise.all(
      response.data.results.map(async (p) => {
        const pokemonRecord = await axios.get(p.url);
        return pokemonRecord.data;
      })
    );
    // console.log(pokemons);
    dispatch({
      type: GET_POKEMONS,
      payload: {
        pokemons,
        next: response.data.next,
        previous: response.data.previous,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonDetails = (name) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/${name}`);
    // console.log(response.results);
    dispatch({ type: GET_POKEMON_DETAIL, payload: response.data.results });
  } catch (err) {
    console.log(err);
  }
};

export const addPokemonFavorite = (pokemon) => {
  return {
    type: ADD_POKEMON_FAVORITE,
    payload: pokemon,
  };
};

export const removePokemonFavorite = (pokemon) => {
  return {
    type: REMOVE_POKEMON_FAVORITE,
    payload: pokemon,
  };
};
