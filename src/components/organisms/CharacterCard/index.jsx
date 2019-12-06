import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";
import { Row, Col } from "antd";
import "./index.css";
const { Meta } = Card;

export default class CharacterCard extends Component {
  render() {
    return (
      <Card style={{ width: "700px" }}>
        <Row type="flex" justify="space-between">
          <Col span={4}>
            {" "}
            <Avatar size={100} icon="user"></Avatar>
            <span className="spanText">Alive</span>
          </Col>
          <Col span={4} className="gagaga">
            Rick Sanchez
          </Col>
          <Col span={4} className="gagaga">
            Human
          </Col>
          <Col span={4} className="gagaga">
            Button1
          </Col>
          <Col span={4} className="gagaga">
            Button2
          </Col>
        </Row>
      </Card>
    );
  }
}
