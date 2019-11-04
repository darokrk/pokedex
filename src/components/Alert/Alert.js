import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { alert: state.alert };
};

const ConnectedAlert = ({ alert }) => {
  if (alert) {
    return <h5 className="pt-4 text-danger">{`${alert}`}</h5>;
  } else return null;
};

const Alert = connect(
  mapStateToProps,
  null
)(ConnectedAlert);

export default Alert;