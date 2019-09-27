import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import List from "./List";
import Form from "./Form";
import Post from "./Posts";
import Pokemon from "../components/Pokemon";

const App = () => (
  <BrowserRouter>
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>

      <div className="col-12">
        <h2>Pokemons</h2>
        <Switch>
          <Route exact path="/" component={Post} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          <Post />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
