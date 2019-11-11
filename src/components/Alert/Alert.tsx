import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ pokemon }: any) => {
  return { alert: pokemon.alert };
};

const ConnectedAlert = ({ alert }: any) => {
  if (alert) {
    return <h5 className="pt-4 text-danger">{`${alert}`}</h5>;
  } else return null;
};

const Alert = connect(
  mapStateToProps,
  null
)(ConnectedAlert);

export default Alert;
