import React from "react";

const PokemonDesc = ({ desc }) => {
  return (
    <div className="col">
      <p className="p-2">{desc}</p>
    </div>
  );
};

export default PokemonDesc;
