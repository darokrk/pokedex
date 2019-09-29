import React, { Component } from "react";
import { connect } from "react-redux";
import { getPokemonData, getPokemonSpecies } from "../../actions/index";

import styled from "styled-components";

import PokemonType from "./PokemonType";
import PokemonImg from "./PokemonImg";
import PokemonName from "./PokemonName";
import PokemonStats from "./PokemonStats";
import PokemonDesc from "./PokemonDesc";
import PokemonSpecies from "./PokemonSpecies";

const StyledDataButton = styled.button`
  line-height: 1;
`;

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
    const {
      pokemonIndex,
      types,
      history,
      imageUrl,
      name,
      pokemon,
      pokemonDesc,
      pokemonSpec
    } = this.props;
    return (
      <div className="col-12 col-md-10 mx-auto my-3">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-12 col-md-4">
                <h5 className="m-0">{`Pokemon number ${pokemonIndex}`}</h5>
              </div>
              <div className="col-8 col-md-5 d-flex justify-content-center align-items-center">
                <PokemonType types={types} />
              </div>
              <div className="col-3 d-flex justify-content-end">
                <StyledDataButton
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={history.goBack}
                >
                  x
                </StyledDataButton>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-3">
                <PokemonImg imageUrl={imageUrl} imageAlt={name} />
              </div>
              <div className="col-md-9">
                <PokemonName name={name} />
                <PokemonStats pokemon={pokemon} />
              </div>
              <div className="row mt-1">
                <PokemonDesc desc={pokemonDesc} />
              </div>
            </div>
          </div>
          <hr />
          <div className="card-body">
            <h5 className="card-title text-center">Profile</h5>
            <div className="row">
              <PokemonSpecies pokemonSpec={pokemonSpec} />
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