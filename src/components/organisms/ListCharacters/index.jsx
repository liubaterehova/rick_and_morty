import React, { Component } from "react";
import CharacterCard from "../CharacterCard";
import { Spin } from "antd";

export default class ListCharacters extends Component {
  render() {
    const { characters } = this.props;
    if (!characters) {
      return <Spin />;
    }
    return (
      <div style={{ width: "700px" }}>
        <CharacterCard characters={characters} />;
      </div>
    );
  }
}
