import React from "react";

const PokemonDesc = ({ desc }) => {
  if (desc) {
    return (
      <div className="col">
        <p className="p-2">{desc}</p>
      </div>
    );
  } else return null;
};

export default PokemonDesc;
