import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import { history } from "./history";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_ru from "./translations/ru/common.json";
import common_en from "./translations/en/common.json";
import configureStore from "./store";

import * as serviceWorker from "./serviceWorker";
import makeApi from "./api";
import Root from "./containers/root";

import "./index.css";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use,

  resources: {
    en: {
      common: common_en // 'common' is our custom namespace
    },
    ru: {
      common: common_ru
    }
  }
});

const configure = async () => {
  const api = makeApi({ client: axios });
  const store = configureStore({ api, history });

  const rootElement = document.getElementById("root");

  ReactDOM.render(
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <Root history={history} />{" "}
      </Provider>
    </I18nextProvider>,
    rootElement
  );

  serviceWorker.unregister();
};

configure();
