import React, { Component } from "react";
import { connect } from "react-redux";

import { getPokemonData } from "../actions/index";

const mapStateToProps = ({ pokemon }) => {
  return { name: pokemon };
};

export class Pokemon extends Component {
  // state = {
  //   name: "",
  //   pokemonIndex: "",
  //   imageUrl: ""
  // };

  componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    this.props.getPokemonData(pokemonIndex);
  }

  render() {
    return <div>{this.props.name}</div>;
  }
}

export default connect(
  mapStateToProps,
  { getPokemonData }
)(Pokemon);
