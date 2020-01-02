import {
  DATA_LOADED,
  API_ERRORED,
  POKEMON_FOUND,
  DATA_POKEMON_LOADED,
  DATA_POKEMON_SPEC_LOADED
} from "../helpers/action-types";

const initialState = {
  pokemonsData: [],
  pokemon: {},
  pokemonSpec: {},
  searchPokemonData: []
};

type Actions = {
  type: string;
  payload: any;
};

// interface initialState {
//   pokemonsData: any;
//   pokemon: object;
//   pokemonSpec: object;
//   searchPokemonData: any;
// }

const dataReducer = (state: any = initialState, action: Actions) => {
  switch (action.type) {
    case DATA_LOADED: {
      return {
        ...state,
        pokemonsData: [...action.payload],
        searchPokemonData: []
      };
    }
    case API_ERRORED: {
      return {
        ...state,
        alert: action.payload
      };
    }
    case POKEMON_FOUND: {
      return {
        ...state,
        searchingPokemon: "",
        searchPokemonData: [...action.payload],
        alert: ""
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

export default dataReducer;
