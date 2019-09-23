import React from "react";
import { connect } from "react-redux";
import Alert from "./Alert";

import { removeArticle } from "../actions/index";

const mapStateToProps = state => {
  return { articles: state.articles, alert: state.alert };
};

const mapDispatchToProps = dispatch => {
  return {
    removeArticle: id => dispatch(removeArticle(id))
  };
};

const ConnectedList = ({ articles, removeArticle, alert }) => (
  <>
    <ul className="list-group list-group-flush">
      {articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
          <button
            type="button"
            className="btn btn-danger mx-2"
            onClick={() => removeArticle(el.id)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
    <Alert alert={alert} />
  </>
);

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

export default List;
