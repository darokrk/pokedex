// import React, { Component } from "react";
import React, { useState } from "react";

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

const ConnectedForm = ({ searchPokemon, getData }) => {
  const [value, setValue] = useState("");

  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    searchPokemon(value);
    setValue("");
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">write pokemon name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={value}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success btn-md">
          Search
        </button>
      </StyledForm>
      <StyledDataButton className="btn btn-info float-right" onClick={getData}>
        Get Data
      </StyledDataButton>
    </>
  );
};

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
