import React, { Component } from "react";
import { Table, Avatar, Button } from "antd";
import "./index.css";

export default class CharacterCard extends Component {
  state = {
    currentPageInApi: 1,
    currentPage: 1,
    pageSize: 10
  };

  id = 1;
  componentDidMount() {
    console.log("Moiunt Number Of Page  In Api", this.state.currentPageInApi);
    this.props.getAllCharacters({ page: this.state.currentPageInApi });
  }
  render() {
    const { characters, total, isLoading } = this.props;
    console.log(`render ${this.id++}`);
    console.log("props in CharacterCard", this.props);

    const columns = [
      {
        align: "center",
        title: "IMF&STATUS",
        dataIndex: "image",
        defaultSortOrder: "descend",
        sorter: (a, b) => {
          if (a.status > b.status) return 1;
          if (a.status < b.status) return -1;
          else return 0;
        },
        render: (image, character) => (
          <div>
            <Avatar size={100} icon="user" src={image}></Avatar>
            <div>{character.status}</div>
          </div>
        )
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
        dataIndex: "species",
        defaultSortOrder: "descend",
        sorter: (a, b) => {
          if (a.species > b.species) return 1;
          if (a.species < b.species) return -1;
          else return 0;
        }
      },
      {
        dataIndex: "button1",
        filterMultiple: false,
        render: (_, character) => (
          <Button
            type="dashed"
            onClick={() => {
              console.log("key", character.id);
            }}
          >
            DETAILS
          </Button>
        )
      },
      {
        dataIndex: "button2",
        filterMultiple: false,
        render: () => <Button type="dashed">EDIT</Button>
      }
    ];

    const onChange = pagination => {
      let numberOfElement = (pagination.current - 1) * pagination.pageSize;
      let currentPageInApi = Math.floor(numberOfElement / 20) + 1;

      this.setState({
        currentPage: pagination.current,
        currentPageInApi: currentPageInApi,
        pageSize: pagination.pageSize
      });

      this.props.getAllCharacters({ page: currentPageInApi });
    };

    const currentCharacters = (characters, pageSize, currentPage) => {
      currentPage -= 1;
      currentPage = currentPage % (20 / pageSize);
      console.log("___currentPage___", currentPage);
      return characters.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
      );
    };

    return (
      <Table
        pagination={{
          defaultPageSize: this.state.pageSize,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
          total: total,
          current: this.state.currentPage
        }}
        loading={isLoading}
        rowKey={obj => obj.id}
        columns={columns}
        dataSource={currentCharacters(
          characters,
          this.state.pageSize,
          this.state.currentPage
        )}
        onChange={onChange}
      />
    );
  }
}
