import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

import PokemonCard from "./Pokemon/PokemonCard";

const mapStateToProps = state => {
  return { pokemonsData: state.pokemonsData };
};

export class Post extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <ul className="d-flex flex-wrap p-0 mt-3">
        {this.props.pokemonsData.map((pokemon, index) => (
          <PokemonCard
            key={new Date().getTime() + index}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </ul>
    );
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);
