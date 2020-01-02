import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData } from "../../actions/index";

import PokemonCard from "../Pokemon/PokemonCard";

const mapStateToProps = (state: stateInterface) => {
  if (state.data.searchPokemonData.length) {
    return { pokemonsData: state.data.searchPokemonData };
  } else return { pokemonsData: state.data.pokemonsData };
};

interface stateInterface {
  data: {
    searchPokemonData: [];
    pokemonsData: [];
  };
}

interface getDataInterface {
  getData: Function;
  pokemonsData: Array<getPokemonsData>;
}
interface getPokemonsData {
  name: string;
  url: string;
}

const PokemonsList: React.FC<getDataInterface> = ({
  getData,
  pokemonsData
}) => {
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <ul className="d-flex flex-wrap p-0 mt-3">
      {pokemonsData.map((pokemon, index: number) => (
        <PokemonCard
          key={new Date().getTime() + index}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, { getData })(PokemonsList);
