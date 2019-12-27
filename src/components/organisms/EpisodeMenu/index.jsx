import React, { Component } from "react";
import { Avatar, Collapse, Spin, Icon, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import CharacterNames from "../CharacterNames";
import { bindActionCreators } from "redux";
const { Panel } = Collapse;
///// вынести <menu> и ovwrlay в отдельный класс
export default class EpisodeMenu extends Component {
  render() {
    console.log("this.props in Episode Menu", this.props);
    const {
      episodesURL,
      episodesfromAPI,
      getEpisodeById,
      characterNames,
      getCharacterNames,
      isLoadingСharacterNames
    } = this.props;

    const getEpisodeIdFromURL = str => {
      const splited = str.split("/");
      const episodeNumber = splited[splited.length - 1];
      return Number.parseInt(episodeNumber);
    };

    const getArrOdIDFromArrOfChararcters = characters => {
      let arr = characters.map(character => {
        return getEpisodeIdFromURL(character);
      });
      console.log("arrOfIdsNamesInEpisodeMenu", arr);
      return arr;
    };

    const genExtra = episode =>
      episode && !episode.isLoading ? (
        <Dropdown
          trigger={["hover"]}
          overlay={
            <CharacterNames
              charactersID={getArrOdIDFromArrOfChararcters(episode.characters)}
              getCharacterNames={getCharacterNames}
              isLoadingСharacterNames={isLoadingСharacterNames}
              characterNames={characterNames}
            />
          }
        >
          <Icon type="user" />
        </Dropdown>
      ) : null;

    const callbackKey = key => {
      if (key.length === 0) {
        return;
      }

      const episode = key[key.length - 1];
      const episodeNumber = getEpisodeIdFromURL(episode);
      if (episodesfromAPI[episodeNumber]) {
        return;
      }

      getEpisodeById({ id: episodeNumber });
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
