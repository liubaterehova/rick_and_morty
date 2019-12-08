import React, { Component } from "react";
import CharacterCard from "../CharacterCard";

export default class ListCharacters extends Component {
  render() {
    return (
      <div style={{ width: "700px" }}>
        <CharacterCard {...this.props} />;
      </div>
    );
  }
}
