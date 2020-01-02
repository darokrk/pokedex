import { takeEvery, call, put } from "redux-saga/effects";
import {
  DATA_LOADED,
  DATA_REQUESTED,
  API_ERRORED,
  DATA_POKEMON_REQ,
  DATA_POKEMON_LOADED,
  DATA_POKEMON_SPEC_REQ,
  DATA_POKEMON_SPEC_LOADED
} from "../helpers/action-types";

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
  yield takeEvery<any>(DATA_POKEMON_REQ, workerPokemonSaga);
  yield takeEvery<any>(DATA_POKEMON_SPEC_REQ, workerPokemonSpec);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e });
  }
}

function* workerPokemonSaga({ routeParam }:any) {
  try {
    const payload = yield call(() => getPokemonData(routeParam));
    yield put({ type: DATA_POKEMON_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e });
  }
}

function* workerPokemonSpec({ routeParam }:any) {
  try {
    const payload = yield call(() => getPokemonSpec(routeParam));
    yield put({ type: DATA_POKEMON_SPEC_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e });
  }
}

function getData() {
  return fetch("https://pokeapi.co/api/v2/pokemon/?limit=40")
    .then(response => response.json())
    .then(response => response.results)
    .catch(
      error =>
        `Your Call For Data went wrong, ${error} check your call if it's correct!`
    );
}

function getPokemonData(pokemonIndex:number) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
    .then(response => response.json())
    .then(data => data)
    .catch(
      error =>
        `Your Call For Data went wrong, ${error} check your call if it's correct!`
    );
}

function getPokemonSpec(pokemonIndex:number) {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`)
    .then(response => response.json())
    .then(data => {
      let description = "";
      data.flavor_text_entries.some((flavor:any) => {
        if (flavor.language.name === "en") {
          return (description = flavor.flavor_text);
        }
        else return description;
      });
      const dataSpec = { ...data, description };
      return dataSpec;
    })
    .catch(
      error =>
        `Your Call For Data went wrong, ${error} check your call if it's correct!`
    );
}
