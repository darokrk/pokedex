import React, { Component } from "react";
import { connect } from "react-redux";
import { getPokemonData, getPokemonSpecies } from "../actions/index";

import PokemonType from "./PokemonType";
import PokemonImg from "./PokemonImg";
import PokemonName from "./PokemonName";
import PokemonStats from "./PokemonStats";
import PokemonDesc from "./PokemonDesc";
import PokemonSpecies from "./PokemonSpecies";

const mapStateToProps = ({ pokemon, pokemonSpec }) => {
  return {
    pokemonIndex: pokemon.id,
    pokemon: pokemon,
    name: pokemon.name,
    imageUrl: pokemon.sprites,
    types: pokemon.types,
    pokemonSpec: pokemonSpec,
    pokemonDesc: pokemonSpec.description
  };
};

export class Pokemon extends Component {
  componentDidMount() {
    const { pokemonIndex } = this.props.match.params;
    this.props.getPokemonData(pokemonIndex);
    this.props.getPokemonSpecies(pokemonIndex);
  }

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
                <PokemonName name={this.props.name} />
                <PokemonStats pokemon={this.props.pokemon} />
              </div>
              <div className="row mt-1">
                <PokemonDesc desc={this.props.pokemonDesc} />
              </div>
            </div>
          </div>
          <hr />
          <div className="card-body">
            <h5 className="card-title text-center">Profile</h5>
            <div className="row">
              <PokemonSpecies pokemonSpec={this.props.pokemonSpec} />
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
