import React from "react";
import spinner from "../../assets/25.gif";

interface Props {
  imageUrl: {
    front_default: string;
  };
  imageAlt: string;
}

const PokemonImg: React.FC<Props> = ({ imageUrl, imageAlt }) => {
  if (imageUrl) {
    return (
      <img
        className="card-img-top rounded mx-auto mt-2"
        src={imageUrl.front_default}
        alt={imageAlt}
      />
    );
  } else {
    return <img src={spinner} alt="spinner" />;
  }
};

export default PokemonImg;
