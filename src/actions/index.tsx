import {
  SEARCH_POKEMON,
  POKEMON_FOUND,
  POKEMON_NOT_FOUND,
  DATA_REQUESTED,
  DATA_POKEMON_REQ,
  DATA_POKEMON_SPEC_REQ
} from "../helpers/action-types";

export const searchPokemon = (payload: any) => {
  return {
    type: SEARCH_POKEMON,
    payload
  };
};

export const pokemonFound = (payload: any) => {
  return {
    type: POKEMON_FOUND,
    payload
  };
};

export const pokemonNotFound = (payload: any) => {
  return {
    type: POKEMON_NOT_FOUND,
    payload
  };
};

export const getPokemonData = (routeParam: string) => ({
  type: DATA_POKEMON_REQ,
  routeParam
});

export const getPokemonSpecies = (routeParam: string) => ({
  type: DATA_POKEMON_SPEC_REQ,
  routeParam
});

export const getData = () => ({ type: DATA_REQUESTED });
