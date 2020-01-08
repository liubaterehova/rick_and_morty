import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { translate, Trans } from "react-i18next";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Trans i18nKey="welcome.intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Trans>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

export default translate("common")(App);
