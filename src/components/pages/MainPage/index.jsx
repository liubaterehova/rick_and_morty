import React, { Component } from "react";
import SearchPanel from "../../moleculas/SearchPanel";
import SortButtons from "../../moleculas/SortButtons";
import ListCharacters from "../../organisms/ListCharacters";
import Template from "../../Template";

export default class MainPage extends Component {
  render() {
    return (
      <Template>
        <SearchPanel />
        <SortButtons />
        <ListCharacters />
      </Template>
    );
  }
}
