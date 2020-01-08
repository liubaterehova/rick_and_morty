import React, { Component } from "react";
import { Table, Avatar, Button } from "antd";
import "./index.css";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

class CharacterCards extends Component {
  state = {
    currentPageInApi: 1,
    currentPage: 1,
    pageSize: 10,
    charactersInPage: [],
    character: null
  };

  id = 1;
  componentDidMount = () => {
    if (!this.props.characters.length && !this.props.searchText) {
      this.props.getAllCharacters({ page: this.state.currentPageInApi });
    }
  };
  componentWillUnmount = () => {
    this.props.getStatuses();
  };
  render() {
    const { t } = this.props;

    const {
      characters,
      total,
      isLoading,
      addPersonalCard,
      searchText,
      getOneCharacter
    } = this.props;

    const columns = [
      {
        align: "center",
        title: t("common:headersInChararcterPage.firstTitle"),
        dataIndex: "image",

        sorter: (a, b) => {
          if (a.status > b.status) return 1;
          if (a.status < b.status) return -1;
          else return 0;
        },
        render: (image, character) => (
          <div>
            <Avatar size={100} icon="user" src={image}></Avatar>
            <div>
              {t("common:statusUnderPic", { context: `${character.status}` })}
            </div>
            {/* <div>{t("common:statusUnderPic", { character })}</div> */}
            {/* <div>{character.status}</div> */}
          </div>
        )
      },
      {
        title: t("common:headersInChararcterPage.secondTitle"),
        dataIndex: "name",

        sorter: (a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          else return 0;
        }
      },
      {
        title: t("common:headersInChararcterPage.thirdTitle"),
        dataIndex: "species",
        render: species => (
          <div>{t("common:race", { context: `${species}` })}</div>
        ),
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
          <Button type="dashed" onClick={() => {}}>
            {" "}
            <Link
              to={{
                pathname: `/details/${character.id}`
              }}
            >
              {t("common:buttons.details")}
              {/* DETAILS */}
            </Link>
          </Button>
        )
      },
      {
        dataIndex: "button2",
        filterMultiple: false,
        render: (_, character) => (
          <Button
            type="dashed"
            onClick={event => {
              addPersonalCard(character);
              getOneCharacter({ id: character.id });
            }}
          >
            <Link
              to={{
                pathname: "/personalcard"
              }}
            >
              {t("common:buttons.edit")}
            </Link>
          </Button>
        )
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
      const arr = characters.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
      );

      if (searchText) {
        return characters.filter(character =>
          character.name.includes(searchText)
        );
      }
      return arr;
    };

    return (
      <div>
        <Table
          pagination={{
            defaultPageSize: this.state.pageSize,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "20"],
            total: total,
            current: this.state.currentPage
          }}
          style={{ width: "700px" }}
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
      </div>
    );
  }
}
export default withTranslation()(CharacterCards);
