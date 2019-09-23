import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";

import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  state = { title: "" };

  handleChange = event =>
    this.setState({ [event.target.id]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    const { title } = this.state;
    const { addArticle } = this.props;
    const id = uuidv1();
    addArticle({ title, id });
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
