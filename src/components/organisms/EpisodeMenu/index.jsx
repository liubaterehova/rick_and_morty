import React, { Component } from "react";
import { Avatar, Collapse, Spin, Icon, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

export default class EpisodeMenu extends Component {
  render() {
    const {
      episodesURL,
      episodesfromAPI,
      getEpisodeById,
      characterNames,
      getCharacterName
    } = this.props;

    const getEpisodeIdFromURL = str => {
      const splited = str.split("/");
      const episodeNumber = splited[splited.length - 1];
      return episodeNumber;
    };

    const genExtra = episode =>
      episode && !episode.isLoading ? (
        <Dropdown overlay={makeMenu(episode.characters)}>
          <Icon type="user" />
        </Dropdown>
      ) : (
        <Icon type="frown" />
      );

    const callbackKey = key => {
      if (key.length === 0) return;
      let episode = key[key.length - 1];
      const episodeNumber = getEpisodeIdFromURL(episode);
      if (episodesfromAPI[episodeNumber]) {
        return;
      }
      getEpisodeById({ id: episodeNumber });
    };

    const makeMenu = characters => {
      return (
        <Menu>
          {characters.map(character => {
            let id = getEpisodeIdFromURL(character);
            console.log("id in EpisodeMenu", id);
            getCharacterName({ id: id });

            return characterNames[id].isLoadingCharacterName ? (
              <Spin />
            ) : (
              <Menu.Item key={characterNames[id]}>
                <Link
                  to={{
                    pathname: `/details/${id}`
                  }}
                >
                  {this.props.characterNames[id]}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      );
    };
    return (
      <Collapse onChange={callbackKey} className="collapse">
        {episodesURL.map(ep => {
          const id = getEpisodeIdFromURL(ep);

          return (
            <Panel header={ep} key={ep} extra={genExtra(episodesfromAPI[id])}>
              {!episodesfromAPI[id] || episodesfromAPI[id].isLoading ? (
                <Spin key={ep} />
              ) : (
                <div>
                  <p>Вышел: {episodesfromAPI[id].air_date}</p>
                  <p>Название эпизода: {episodesfromAPI[id].name}</p>
                </div>
              )}
            </Panel>
          );
        })}
      </Collapse>
    );
  }
}
