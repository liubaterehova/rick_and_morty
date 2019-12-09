import React, { Component } from "react";
import { Card, Avatar, Row, Col, Button, Modal } from "antd";
import "./index.css";

const { Meta } = Card;

export default class PersonalCard extends Component {
  state = { visible: true };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    const { character } = this.props.location.state;
    const { name, status, species, image, type, gender } = character;
    console.log("link", character);
    return (
      <Modal
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width={600}
        footer={[
          <Button key="cancel" onClick={this.handleCancel}>
            CANCEL
          </Button>,
          <Button key="ok" type="primary" onClick={this.handleOk}>
            OK
          </Button>,
          <Button key="return" type="primary" onClick={this.handleOk}>
            RETURN TO DEFAULT
          </Button>
        ]}
      >
        <Row type="flex" justify="space-around">
          <Col span={20}>
            {" "}
            <h1 className="title">PERSONAL CARD {name}</h1>
          </Col>
          <Col span={1}> </Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={2}>
            <Avatar size={100} icon="user" src={image} />
            <div className="spanText">{status}</div>
          </Col>
          <Col span={6}>
            <p>Race :{species}</p>
            <p>Gender: {gender}</p>
            <p>Species : {species}</p>
            <p>Type : {type}</p>
          </Col>
        </Row>

        {/* <Row type="flex" justify="center" className="row">
          <Button>OK</Button>
          <Button>CANCEL</Button>
          <Button>RETURN TO DEFAULT</Button>
        </Row> */}
      </Modal>
    );
  }
}
