import React, { Component } from "react";
import { connect } from "react-redux";
import { getPokemonData, getPokemonSpecies } from "../actions/index";

import PokemonType from "./PokemonType";
import PokemonImg from "./PokemonImg";
import PokemonStats from "./PokemonStats";

const mapStateToProps = ({ pokemon, pokemonSpec }) => {
  return {
    pokemonIndex: pokemon.id,
    name: pokemon.name,
    imageUrl: pokemon.sprites,
    types: pokemon.types,
    stats: pokemon.stats,
    pokemonSpec: pokemonSpec
  };
};

export class Pokemon extends Component {
  componentDidMount() {
    const { pokemonIndex } = this.props.match.params;
    this.props.getPokemonData(pokemonIndex);
    this.props.getPokemonSpecies(pokemonIndex);
  }

  // let {hp,atack,defense,speed,specialAttack,specialDefense} = ''

  firstLetterUpperCase = name => {
    if (this.props.name) {
      return name
        .toLowerCase()
        .split(" ")
        .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
        .join("");
    }
  };

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5 className="m-0">{`Pokemon number ${this.props.pokemonIndex}`}</h5>
              </div>
              <div className="col-7 d-flex justify-content-end align-items-center">
                <PokemonType types={this.props.types} />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-3">
                <PokemonImg
                  imageUrl={this.props.imageUrl}
                  imageAlt={this.props.name}
                />
              </div>
              <div className="col-md-9">
                <h4 className="mx-auto">
                  {this.firstLetterUpperCase(this.props.name)}
                </h4>
                <PokemonStats stats={this.props.stats} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getPokemonData, getPokemonSpecies }
)(Pokemon);
