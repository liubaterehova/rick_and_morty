import React, { Component } from "react";
import { Card, Avatar, Row, Col, Button, Modal } from "antd";
import "./index.css";

export default class PersonalCard extends Component {
  state = {
    visible: true,
    planet: this.props.personalCard.origin.name,
    gender: this.props.personalCard.gender,
    species: this.props.personalCard.species,
    status: this.props.personalCard.status,
    id: this.props.personalCard.id
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
    let obj = {
      id: this.state.id,
      planet: this.state.planet,
      gender: this.state.gender,
      species: this.state.species,
      status: this.state.status
    };
    this.props.changePersonalCard(...this.props.personalCard, ...obj);
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
    console.log("character", character);
    return (
      <Modal
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width={600}
        footer={[
          <Button key="cancel" type="primary" onClick={this.handleCancel}>
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
            <p className="pStyle">
              <span> Planet</span> :
              <input
                className="input"
                value={this.state.planet}
                onChange={e => {
                  this.setState({ ...this.state, planet: e.target.value });
                }}
              ></input>
            </p>
            <p className="pStyle">
              Gender:{" "}
              <input
                className="input"
                value={this.state.gender}
                onChange={e => {
                  this.setState({ ...this.state, gender: e.target.value });
                }}
              ></input>
            </p>
            <p className="pStyle">
              Species{" "}
              <input
                className="input"
                value={this.state.species}
                onChange={e => {
                  this.setState({ ...this.state, species: e.target.value });
                }}
              ></input>
            </p>
            {/* <p>
              Type :{" "}
              <input
                className="input"
                value={this.state.type}
                onChange={e => {
                  this.setState({ ...this.state, type: e.target.value });
                }}
              ></input>
            </p> */}
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
