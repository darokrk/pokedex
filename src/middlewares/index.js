import { SEARCH_POKEMON } from "../helpers/action-types";
import { pokemonFound, pokemonNotFound } from "../actions/index";

export function forbiddenWordsMiddleware({ dispatch, getState }) {
  return function(next) {
    return function(action) {
      if (action.type === SEARCH_POKEMON) {
        const pokemonsStateData = getState().pokemonsData;
        const foundPokemon = pokemonsStateData.filter(
          pokemon => action.payload === pokemon.name
        );
        if (foundPokemon.length) {
          return dispatch(pokemonFound(foundPokemon));
        } else {
          const message = `Upsss we didn't found that pokemon`;
          return dispatch(pokemonNotFound(message));
        }
      }
      return next(action);
    };
  };
}
