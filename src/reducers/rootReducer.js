import { combineReducers } from "redux";

import dataReducer from "./dataReducer";
import pokemonReducer from "./pokemonReducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  data: dataReducer
});

export default rootReducer;
