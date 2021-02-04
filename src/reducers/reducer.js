import {
  ADD_POKEMON_FAVORITE,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  LOADING,
  REMOVE_POKEMON_FAVORITE,
} from "../actions/actionTypes";

const intialState = {
  pokemons: [],
  next: null,
  previous: null,
  favorites: [],
  loading: false,
};

export default function reducer(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POKEMONS: {
      return {
        ...state,
        pokemons: payload.pokemons,
        next: payload.next,
        previous: payload.previous,
      };
    }

    case GET_POKEMON_DETAIL: {
      return state;
    }

    case ADD_POKEMON_FAVORITE: {
      return { ...state, favorites: [...state.favorites, payload] };
    }

    case REMOVE_POKEMON_FAVORITE: {
      const pokemons = state.favorites.filter((p) => p.id !== payload.id);
      return { ...state, favorites: pokemons };
    }

    case LOADING: {
      return { ...state, loading: payload };
    }

    default:
      return state;
  }
}
