import { SEARCH_POKEMON } from "../helpers/action-types";
import { pokemonFound, pokemonNotFound } from "../actions/index";

interface forbiddenWords {
  dispatch: Function;
  getState: Function;
}

export function forbiddenWordsMiddleware({ dispatch, getState }:forbiddenWords) {
  return function(next:Function) {
    return function(action:any) {
      if (action.type === SEARCH_POKEMON) {
        const pokemonsStateData = getState().data.pokemonsData;
        const foundPokemon = pokemonsStateData.filter(
          (pokemon:any) => action.payload === pokemon.name
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
