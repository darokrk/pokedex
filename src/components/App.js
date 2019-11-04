import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./SearchPokemon/SearchPokemon";
import PokemonsList from "./PokemonsList";
import Pokemon from "../components/Pokemon/Pokemon";
import Alert from "./Alert/Alert";

const App = () => (
  <BrowserRouter>
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Pokedex App</h2>
        <Alert />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Search Your Pokemon</h2>
        <Search />
      </div>
      <div className="col-12">
        <h4 className="p-3">Pokemons List</h4>
        <Switch>
          <Route exact path="/" component={PokemonsList} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
