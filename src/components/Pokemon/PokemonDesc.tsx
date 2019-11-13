import React from "react";

const PokemonDesc: React.FC<{ desc: string }> = ({ desc }) => {
  if (desc) {
    return (
      <div className="col">
        <p className="p-2">{desc}</p>
      </div>
    );
  } else return null;
};

export default PokemonDesc;
