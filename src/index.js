import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import { history } from "./history";

import configureStore from "./store";

import * as serviceWorker from "./serviceWorker";
import makeApi from "./api";
import Root from "./containers/root";

import "./index.css";

const configure = async () => {
  const api = makeApi({ client: axios });
  const store = configureStore({ api, history });

  const rootElement = document.getElementById("root");

  ReactDOM.render(
    <Provider store={store}>
      <Root history={history} />{" "}
    </Provider>,
    rootElement
  );

  serviceWorker.unregister();
};

configure();
