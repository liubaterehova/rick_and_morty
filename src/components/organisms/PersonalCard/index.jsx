import React, { Component } from "react";

import { history } from "../../../history";
import "./index.css";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router-dom";

import {
  Avatar,
  Row,
  Col,
  Button,
  Modal,
  Menu,
  Dropdown,
  Icon,
  message,
  Input
} from "antd";

class PersonalCard extends Component {
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
    if (!this.props.personalCard) return;
    this.setState({
      planet: this.props.personalCard.origin.name,
      gender: this.props.personalCard.gender,
      species: this.props.t("common:race", {
        context: `${this.props.personalCard.species}`
      }),
      status: this.props.t("common:statusUnderPic", {
        context: `${this.props.personalCard.status}`
      }),
      name: this.props.personalCard.name
    });
  }

  handleOk = e => {
    this.success();
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
  success = () => {
    message.success(this.props.t("common:messages.success"), 3);
  };

  info = () => {
    message.info(this.props.t("common:messages.delete"), 3);
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
    history.push("/main");
  };

  delete = () => {
    this.props.deleteCharacter({ id: this.props.personalCard.id });
    this.info();
    history.push("/main");
  };

  returnToDefault = e => {
    this.setState({
      ...this.props.oneCharacterById,
      planet: this.props.oneCharacterById.origin.name
    });
  };

  render() {
    const { t } = this.props;

    if (!this.props.personalCard) {
      return (
        <Redirect
          to={{
            pathname: `/main`
          }}
        ></Redirect>
      );
    }
    const { image } = this.props.personalCard;

    let key = 0;

    const menu = (
      <Menu>
        {this.props.statuses.map(status => (
          <Menu.Item
            key={`${key++}`}
            onClick={e => {
              this.setState({
                status: t("common:statusUnderPic", {
                  context: `${this.props.statuses[e.key]}`
                }),
                visibleStatus: false
              });
            }}
          >
            {t("common:statusUnderPic", { context: `${status}` })}
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
            {t("common:buttons.delete")}
          </Button>,
          <Button key="ok" type="primary" onClick={this.handleOk}>
            OK
          </Button>,
          <Button key="return" type="primary" onClick={this.returnToDefault}>
            {t("common:buttons.returnToDefault")}
          </Button>
        ]}
      >
        <h2>
          <Row
            type="flex"
            justify="center"
            style={{ alignItems: "center", marginBottom: "70px" }}
          >
            <div>{t("common:titlePersonalCard")}&nbsp;&nbsp; </div>
            <input
              value={this.state.name}
              onChange={e => {
                this.setState({ ...this.state, name: e.target.value });
              }}
            />
          </Row>
        </h2>
        <Row
          type="flex"
          justify="space-around"
          style={{ marginBottom: "30px" }}
        >
          <Col>
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

          <Col>
            <Row gutter={[0, 8]}>
              <Col span={8}>
                <div className="pStyle">{t("common:planet")}:</div>
              </Col>
              <Col span={16}>
                <Input
                  className="input"
                  value={this.state.planet}
                  onChange={e => {
                    this.setState({ ...this.state, planet: e.target.value });
                  }}
                ></Input>
              </Col>
            </Row>

            <Row gutter={[0, 8]}>
              <Col span={8}>
                <div className="pStyle">{t("common:gender")}: </div>
              </Col>
              <Col span={16}>
                <Input
                  className="input"
                  value={this.state.gender}
                  onChange={e => {
                    this.setState({ ...this.state, gender: e.target.value });
                  }}
                ></Input>
              </Col>
            </Row>

            <Row gutter={[0, 8]}>
              <Col span={8}>
                <div className="pStyle">{t("common:species")}: </div>
              </Col>
              <Col span={16}>
                <Input
                  className="input"
                  value={this.state.species}
                  onChange={e => {
                    this.setState({ ...this.state, species: e.target.value });
                  }}
                ></Input>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default withTranslation()(PersonalCard);
