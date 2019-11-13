import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spinner from "../../assets/25.gif";

import styled from "styled-components";

const ListElement = styled.li`
  list-style: none;
`;

const SpriteImg = styled.img`
  width: 5em;
  height: 5em;
`;

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.6s;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: none;
    color: red;
  }
`;

interface Props {
  name: string;
  url: string;
}

const PokemonCard: React.FC<Props> = ({ name, url }) => {
  const [nameCard, setNameCard] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [pokemonIndex, setPokemonIndex] = useState<string>("");
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  useEffect(() => {
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    setNameCard(name);
    setImageUrl(imageUrl);
    setPokemonIndex(pokemonIndex);
  }, [setNameCard, setImageUrl, setPokemonIndex, name, url]);

  const firstLetterUpperCase = (nameCard: string) =>
    nameCard
      .toLowerCase()
      .split(" ")
      .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
      .join("");

  return (
    <ListElement className="col-md-3 col-sm-6 mb-5">
      <StyledLink to={`pokemon/${pokemonIndex}`}>
        <Card className="card">
          <h5 className="card-header bg-info text-light">{pokemonIndex}</h5>
          {imageLoading ? (
            <img
              src={spinner}
              style={{ width: "5em", height: "5em" }}
              className="card-img-top rounded mx-auto d-block mt-2"
              alt="spinner"
            ></img>
          ) : null}
          <SpriteImg
            className="card-img-top rounded mx-auto mt-2"
            src={imageUrl}
            alt={name}
            onLoad={() => setImageLoading(false)}
            style={imageLoading ? { display: "none" } : { display: "block" }}
          />
          <div className="card-body mx-auto">
            <h6 className="card-title">{firstLetterUpperCase(nameCard)}</h6>
          </div>
        </Card>
      </StyledLink>
    </ListElement>
  );
};

export default PokemonCard;
