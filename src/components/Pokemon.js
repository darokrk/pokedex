import React, { Component } from "react";
import { connect } from "react-redux";

import { getPokemonData } from "../actions/index";

const mapStateToProps = ({ pokemon }) => {
  return { name: pokemon.name, imageUrl: pokemon.sprites };
};

export class Pokemon extends Component {
  componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    this.props.getPokemonData(pokemonIndex);
  }

  render() {
    return (
      <div>
        {this.props.name}
        <img
          src={this.props.imageUrl ? this.props.imageUrl.front_default : ""}
          alt={`${this.props.name} image`}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getPokemonData }
)(Pokemon);
