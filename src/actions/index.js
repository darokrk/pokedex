import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  FOUND_BAD_WORD,
  DATA_REQUESTED,
  DATA_POKEMON_REQ
} from "../constants/action-types";

export const addArticle = payload => {
  return {
    type: ADD_ARTICLE,
    payload
  };
};

export const removeArticle = id => {
  return {
    type: REMOVE_ARTICLE,
    id
  };
};

export const badWordFound = payload => {
  return {
    type: FOUND_BAD_WORD,
    payload
  };
};

export const getPokemonData = routeParam => ({
  type: DATA_POKEMON_REQ,
  routeParam
});
export const getData = () => ({ type: DATA_REQUESTED });
