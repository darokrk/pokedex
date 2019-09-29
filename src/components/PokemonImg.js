import React from "react";
import spinner from "../assets/25.gif";

const PokemonImg = ({ imageUrl, imageAlt }) => {
  if (imageUrl) {
    return (
      <img
        className="card-img-top rounded mx-auto mt-2"
        src={imageUrl.front_default}
        alt={`${imageAlt} image`}
      />
    );
  } else {
    return <img src={spinner} alt="spinner" />;
  }
};

export default PokemonImg;
