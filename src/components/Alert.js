import React from "react";

const Alert = ({ alert }) => (
  <div>{alert ? <h3>{`${alert.title}`}</h3> : null}</div>
);

export default Alert;
