import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import HeaderMainPage from "./components/moleculas/HeaderMainPage";
import SearchPanel from "./components/moleculas/SearchPanel";
import SortButtons from './components/moleculas/SortButtons';
import CharacterCard from './components/organisms/CharacterCard';
import ListCharacters from './components/organisms/ListCharacters';
import MainPage from './components/pages/MainPage';

ReactDOM.render( < MainPage / > , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();