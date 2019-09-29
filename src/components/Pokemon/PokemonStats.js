import React from "react";

import PokemonStatsCell from "./PokemonStatsCell";

const PokemonStats = ({ pokemon }) => (
  <div className="row align-items-center">
    <PokemonStatsCell stats={pokemon.stats} />
    <h6 className="float-left p-3">Weight: {pokemon.weight + ` kg`}</h6>
    <h6 className="float-left p-3">Height: {pokemon.height + ` cm`}</h6>
  </div>
);

export default PokemonStats;
