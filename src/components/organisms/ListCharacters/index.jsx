import React, { Component } from "react";
import CharacterCard from "../CharacterCard";
import { Pagination, Spin } from "antd";

export default class ListCharacters extends Component {
  render() {
    const { characters } = this.props;
    if (!characters) {
      return <Spin />;
    }
    return (
      <div style={{ width: "700px" }}>
        <div>
          <CharacterCard characters={characters} />;
        </div>
        <Pagination
          size="large"
          total={50}
          showSizeChanger
          showQuickJumper
          style={{ textAlign: "center" }}
        />
      </div>
    );
  }
}
