import React, { Component } from "react";
import { Link } from "react-router-dom";

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

class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: ""
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name, imageUrl, pokemonIndex });
  }

  firstLetterUpperCase = name =>
    name
      .toLowerCase()
      .split(" ")
      .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
      .join("");

  render() {
    return (
      <ListElement className="col-md-3 col-sm-6 mb-5">
        <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
          <Card className="card">
            <h5 className="card-header">{this.state.pokemonIndex}</h5>
            <SpriteImg
              className="card-img-top rounded mx-auto mt-2"
              src={this.state.imageUrl}
              alt=""
            />
            <div className="card-body mx-auto">
              <h6 className="card-title">
                {this.firstLetterUpperCase(this.state.name)}
              </h6>
            </div>
          </Card>
        </StyledLink>
      </ListElement>
    );
  }
}

export default PokemonCard;
