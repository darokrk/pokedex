import {
  SEARCH_POKEMON,
  POKEMON_FOUND,
  POKEMON_NOT_FOUND,
  DATA_LOADED,
  API_ERRORED,
  DATA_POKEMON_LOADED,
  DATA_POKEMON_SPEC_LOADED
} from "../helpers/action-types";

const initialState = {
  searchingPokemon: "",
  alert: "",
  pokemonsData: [],
  pokemon: {},
  pokemonSpec: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_POKEMON: {
      return {
        ...state,
        searchingPokemon: action.payload,
        alert: ""
      };
    }
    case POKEMON_FOUND: {
      return {
        ...state,
        searchingPokemon: "",
        pokemonsData: [...action.payload],
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
    case DATA_LOADED: {
      return {
        ...state,
        pokemonsData: [...action.payload]
      };
    }
    case API_ERRORED: {
      return {
        ...state,
        alert: action.payload
      };
    }
    case DATA_POKEMON_LOADED: {
      return {
        ...state,
        pokemon: { ...action.payload }
      };
    }
    case DATA_POKEMON_SPEC_LOADED: {
      return {
        ...state,
        pokemonSpec: { ...action.payload }
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
