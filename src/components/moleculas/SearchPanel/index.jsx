import React, { Component } from "react";
import { Input } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const { Search } = Input;

export default class SearchPanel extends Component {
  render() {
    return (
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
        style={{ width: "300px", margin: "30px" }}
      />
    );
  }
}
