import React, { Component } from "react";
import { Table, Avatar, Button } from "antd";
import "./index.css";

export default class CharacterCard extends Component {
  render() {
    const { characters } = this.props;
    console.log("characters", characters);
    const columns = [
      {
        title: "IMF&STATUS",
        dataIndex: "img",
        defaultSortOrder: "descend",
        sorter: (a, b) => {
          if (a.status > b.status) return 1;
          if (a.status < b.status) return -1;
          else return 0;
        }
      },
      {
        title: "NAME",
        dataIndex: "name",
        defaultSortOrder: "descend",
        sorter: (a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          else return 0;
        }
      },
      {
        title: "RACE",
        dataIndex: "race",
        defaultSortOrder: "descend",
        sorter: (a, b) => {
          if (a.race > b.race) return 1;
          if (a.race < b.race) return -1;
          else return 0;
        }
      },
      {
        dataIndex: "button1",
        filterMultiple: false
      },
      {
        dataIndex: "button2",
        filterMultiple: false
      }
    ];

    const data = characters.map(character => {
      console.log("characterInData", character);
      return {
        key: character.id,
        img: (
          <div>
            <Avatar size={100} icon="user" src={character.image}></Avatar>
            <div className="spanText">{character.status}</div>
          </div>
        ),
        status: character.status,
        name: character.name,
        race: character.species,
        button1: <Button type="dashed">DETAILS</Button>,
        button2: <Button type="dashed">EDIT</Button>
      };
    });

    function onChange(pagination, filters, sorter, extra) {
      console.log("params", pagination, filters, sorter, extra);
    }

    return <Table columns={columns} dataSource={data} onChange={onChange} />;
  }
}
