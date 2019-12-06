import React, { Component } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Button, Radio, Icon } from "antd";

export default class SortButtons extends Component {
  state = {
    size: "large"
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">IMG&STATUS</Radio.Button>
          <Radio.Button value="default">NAME</Radio.Button>
          <Radio.Button value="small">RACE</Radio.Button>
        </Radio.Group>
      </div>
    );
  }
}
