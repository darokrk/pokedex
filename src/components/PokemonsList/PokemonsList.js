import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData } from "../../actions/index";

import PokemonCard from "../Pokemon/PokemonCard";

const mapStateToProps = state => {
  if (state.data.searchPokemonData.length === 1) {
    return { pokemonsData: state.data.searchPokemonData };
  } else return { pokemonsData: state.data.pokemonsData };
};

const PokemonsList = ({ getData, pokemonsData }) => {
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <ul className="d-flex flex-wrap p-0 mt-3">
      {pokemonsData.map((pokemon, index) => (
        <PokemonCard
          key={new Date().getTime() + index}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </ul>
  );
};

export default connect(
  mapStateToProps,
  { getData }
)(PokemonsList);
