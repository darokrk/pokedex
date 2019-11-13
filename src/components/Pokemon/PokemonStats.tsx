import React from "react";

import PokemonStatsCell from "./PokemonStatsCell";

interface Oko {
  name: string;
}

interface StatProps {
  stat: Oko;
  base_stat: number;
}

interface Props {
  pokemon: {
    stats: Array<StatProps>;
    weight: number;
    height: number;
  };
}

const PokemonStats: React.FC<Props> = ({ pokemon }) => (
  <div className="row align-items-center">
    <PokemonStatsCell stats={pokemon.stats} />
    <h6 className="float-left p-3">Weight: {pokemon.weight + ` kg`}</h6>
    <h6 className="float-left p-3">Height: {pokemon.height + ` cm`}</h6>
  </div>
);

export default PokemonStats;
