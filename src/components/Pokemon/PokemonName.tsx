import React from "react";

const firstLetterUpperCase = (name: string) => {
  if (name) {
    return name
      .toLowerCase()
      .split(" ")
      .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
      .join("");
  }
};

const PokemonName: React.FC<{ name: string }> = ({ name }) => {
  return <h4 className="mx-auto">{firstLetterUpperCase(name)}</h4>;
};

export default PokemonName;
