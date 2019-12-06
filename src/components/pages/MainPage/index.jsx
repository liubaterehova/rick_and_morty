import React, { Component } from "react";
import SearchPanel from "../../moleculas/SearchPanel";
import SortButtons from "../../moleculas/SortButtons";
import ListCharacters from "../../organisms/ListCharacters";

export default class MainPage extends Component {
  render() {
    return (
      <div
        style={{
          width: "700px",
          margin: "0 auto"
        }}
      >
        <SearchPanel />
        <SortButtons />
        <ListCharacters />
      </div>
    );
  }
}
