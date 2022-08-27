import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import "./assets/fonts.css";
import { GlobalStyle } from "./constants/global.styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
);
