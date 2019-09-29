import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import { searchPokemon, getData } from "../actions/index";

const StyledForm = styled.form`
  position: relative;
`;

const StyledDataButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 15px;
`;

function mapDispatchToProps(dispatch) {
  return {
    searchPokemon: name => dispatch(searchPokemon(name)),
    getData: () => dispatch(getData())
  };
}

class ConnectedForm extends Component {
  state = { name: "" };

  handleChange = event =>
    this.setState({ [event.target.id]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    const { searchPokemon } = this.props;
    searchPokemon(name);
    this.setState({ name: "" });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <StyledForm onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">write pokemon name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success btn-md">
            Search
          </button>
        </StyledForm>
        <StyledDataButton
          className="btn btn-info float-right"
          onClick={this.props.getData}
        >
          Get Data
        </StyledDataButton>
      </>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
