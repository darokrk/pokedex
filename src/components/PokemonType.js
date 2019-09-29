import React from "react";
import { TYPE_COLORS } from "../helpers/colors";

const PokemonType = ({ types }) => {
  if (types) {
    return types.map(el => (
      <span
        key={el.slot}
        className="badge badge-primary badge-pill mr-1"
        style={{
          backgroundColor: `#${TYPE_COLORS[el.type.name]}`,
          color: "white"
        }}
      >
        {el.type.name}
      </span>
    ));
  } else {
    return null;
  }
};

export default PokemonType;
