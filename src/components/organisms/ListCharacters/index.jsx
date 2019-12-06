import React, { Component } from "react";
import CharacterCard from "../CharacterCard";
import { Pagination } from "antd";

export default class ListCharacters extends Component {
  render() {
    // function showTotal(total) {
    //   return `Total ${total} items`;
    // }
    return (
      <div style={{ width: "700px" }}>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
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
