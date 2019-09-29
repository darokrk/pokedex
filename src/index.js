import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./components/App";

import { createGlobalStyle } from "styled-components";

import myBg from "../src/assets/pattern-bg.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${myBg});
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
