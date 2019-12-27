import React, { Component } from "react";
import { Avatar, Collapse, Spin, Icon, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

export default class CharacterNames extends Component {
  componentDidMount = () => {
    this.props.getCharacterNames({ ids: this.props.charactersID });
  };

  render() {
    console.log("this. props in CharacterNames", this.props);
    const {
      isLoadingСharacterNames,
      charactersID,
      characterNames
    } = this.props;

    const getIdFromURL = str => {
      const splited = str.split("/");
      const episodeNumber = splited[splited.length - 1];
      return Number.parseInt(episodeNumber);
    };
    if (isLoadingСharacterNames) {
      return <Spin />;
    }
    return (
      <Menu>
        {characterNames.map((name, index) => {
          let id = charactersID[index];
          return (
            <Menu.Item key={name}>
              <Link
                to={{
                  pathname: `/details/${id}`
                }}
              >
                {name}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}
