import "./index.css";
import EpisodeMenu from "../EpisodeMenu";
import React, { Component } from "react";

import { Avatar, Collapse, Spin, Icon, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

export default class Details extends Component {
  state = {
    visibleInfo: false
  };

  componentDidMount = () => {
    this.props.getOneCharacter({ id: this.props.match.params.id });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getOneCharacter({ id: this.props.match.params.id });
    }
  };

  render() {
    if (!this.props.oneCharacterById || this.props.isLoadingOnePerson)
      return <Spin size="large" tip="Loading..." />;

    const { episodes, oneCharacterById } = this.props;
    const { name, status, species, image, origin, episode } = oneCharacterById;

    // const getEpisodeIdFromURL = str => {
    //   const splited = str.split("/");
    //   const episodeNumber = splited[splited.length - 1];
    //   return episodeNumber;
    // };
    // const makeMenu = characters => {
    //   return (
    // <Menu>
    //   {characters.map(character => {
    //     let id = getEpisodeIdFromURL(character);
    //     this.props.getCharacterName({ id: id });
    //     // return !this.props.characterNames[id] ||
    //     //   this.props.characterNames[id].isLoadingCharacterName ? (
    //     //   <Spin />
    //     // ) : (
    //     return (
    //       <Menu.Item key={character}>
    //         <Link
    //           to={{
    //             pathname: `/details/${id}`
    //           }}
    //         >
    //           {character}
    //         </Link>
    //       </Menu.Item>
    //     );
    //   })}
    // </Menu>
    //   );
    // };

    // const genExtra = episode =>
    //   episode && !episode.isLoading ? (
    //     <Dropdown overlay={makeMenu(episode.characters)}>
    //       <Icon type="user" />
    //     </Dropdown>
    //   ) : (
    //     <Icon type="frown" />
    //   );

    // const callbackKey = key => {
    //   if (key.length === 0) return;
    //   let episode = key[key.length - 1];
    //   const episodeNumber = getEpisodeIdFromURL(episode);
    //   if (episodes[episodeNumber]) {
    //     return;
    //   }
    //   this.props.getEpisodeById({ id: episodeNumber });
    // };

    return (
      <div className="container">
        <h1>Детальная страница персонажа</h1>
        <Avatar size={364} icon="user" src={image} />
        <h2> {name} </h2>
        <h2>{species}</h2>
        <h2> {status}</h2>
        <h2>{origin.name}</h2>
        <h3 style={{ margin: "16px 0" }}>Список эпизодов персонажа</h3>
        <EpisodeMenu
          episodesURL={episode}
          episodesfromAPI={episodes}
          getEpisodeById={this.props.getEpisodeById}
        />
        {/* <Collapse onChange={callbackKey} className="collapse">
          {episode.map(ep => {
            const id = getEpisodeIdFromURL(ep);

            return (
              <Panel header={ep} key={ep} extra={genExtra(episodes[id])}>
                {!episodes[id] || episodes[id].isLoading ? (
                  <Spin key={ep} />
                ) : (
                  <div>
                    <p>Вышел: {episodes[id].air_date}</p>
                    <p>Название эпизода: {episodes[id].name}</p>
                  </div>
                )}
              </Panel>
            );
          })}
        </Collapse> */}
      </div>
    );
  }
}
