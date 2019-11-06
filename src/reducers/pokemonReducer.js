import {
  SEARCH_POKEMON,
  // POKEMON_FOUND,
  POKEMON_NOT_FOUND
} from "../helpers/action-types";

const initialState = {
  searchingPokemon: "",
  alert: ""
  // pokemonsData: []
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_POKEMON: {
      return {
        ...state,
        searchingPokemon: action.payload,
        alert: ""
      };
    }
    case POKEMON_NOT_FOUND: {
      return {
        ...state,
        searchingPokemon: "",
        alert: action.payload
      };
    }
    default:
      return state;
  }
};

export default pokemonReducer;
