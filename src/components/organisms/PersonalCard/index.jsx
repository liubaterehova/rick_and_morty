import React, { Component } from "react";

import { Avatar, Row, Col, Button, Modal, Menu, Dropdown, Icon } from "antd";

import { history } from "../../../history";
import "./index.css";

export default class PersonalCard extends Component {
  state = {
    visibleStatus: false,
    visible: true,
    planet: "",
    gender: "",
    species: "",
    status: "",
    name: ""
  };

  componentDidMount() {
    this.setState({
      planet: this.props.personalCard.origin.name,
      gender: this.props.personalCard.gender,
      species: this.props.personalCard.species,
      status: this.props.personalCard.status,
      name: this.props.personalCard.name
    });
  }

  handleOk = e => {
    this.setState({
      visible: false
    });
    let obj = {
      name: this.state.name,
      id: this.props.personalCard.id,
      planet: this.state.planet,
      gender: this.state.gender,
      species: this.state.species,
      status: this.state.status
    };
    this.props.changePersonalCard({ ...this.props.personalCard, ...obj });
    history.push("/main");
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
    history.push("/main");
  };

  delete = () => {
    this.props.deleteCharacter({ id: this.props.personalCard.id });
    history.push("/main");
  };

  returnToDefault = e => {
    this.setState({
      ...this.props.oneCharacterById,
      planet: this.props.oneCharacterById.origin.name
    });
  };

  render() {
    const { image } = this.props.personalCard;
    let key = 0;
    const menu = (
      <Menu>
        {this.props.statuses.map(status => (
          <Menu.Item
            key={`${key++}`}
            onClick={e => {
              this.setState({
                status: this.props.statuses[e.key],
                visibleStatus: false
              });
            }}
          >
            {status}
          </Menu.Item>
        ))}
      </Menu>
    );

    return (
      <Modal
        visible={this.state.visible}
        width={600}
        onCancel={this.handleCancel}
        footer={[
          <Button key="cancel" type="primary" onClick={this.delete}>
            DELETE
          </Button>,
          <Button key="ok" type="primary" onClick={this.handleOk}>
            OK
          </Button>,
          <Button key="return" type="primary" onClick={this.returnToDefault}>
            RETURN TO DEFAULT
          </Button>
        ]}
      >
        <Row type="flex" justify="space-around">
          <Col span={19}>
            {" "}
            <h2 className="title">
              PERSONAL CARD{" "}
              <input
                className="input"
                value={this.state.name}
                onChange={e => {
                  this.setState({ ...this.state, name: e.target.value });
                }}
              ></input>
            </h2>
          </Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={2}>
            <Avatar size={100} icon="user" src={image} />
            <div
              className="spanText"
              onClick={e => {
                this.setState({ visibleStatus: !this.state.visibleStatus });
              }}
            >
              <Dropdown
                visible={this.state.visibleStatus}
                overlay={menu}
                trigger={["click"]}
              >
                <span className="ant-dropdown-link spanList" href="#">
                  {this.state.status} <Icon type="down" />
                </span>
              </Dropdown>
            </div>
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
          </Col>
        </Row>
      </Modal>
    );
  }
}
