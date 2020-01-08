import "./index.css";
import EpisodeMenu from "../EpisodeMenu";
import React, { Component } from "react";

import { Avatar, Spin, Button, Icon } from "antd";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
class Details extends Component {
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
    const { t } = this.props;

    return (
      <div className="container">
        <Button type="dashed" onClick={() => {}}>
          <Icon type="left" />{" "}
          <Link
            to={{
              pathname: `/main`
            }}
          >
            {t("common:buttons.back")}
            {/* DETAILS */}
          </Link>
        </Button>
        <h1>{t("common:detailPageHeader")}</h1>
        <Avatar size={364} icon="user" src={image} />
        <h2> {name} </h2>

        <h2>{t("common:race", { context: `${species}` })}</h2>
        <h2> {t("common:statusUnderPic", { context: `${status}` })}</h2>
        <h2>{origin.name}</h2>
        <h3 style={{ margin: "16px 0" }}>{t("common:episodeList")}</h3>
        <EpisodeMenu
          episodesURL={episode}
          episodesfromAPI={episodes}
          getEpisodeById={this.props.getEpisodeById}
          characterNames={this.props.characterNames}
          getCharacterNames={this.props.getCharacterNames}
          isLoadingСharacterNames={this.props.isLoadingСharacterNames}
        />
      </div>
    );
  }
}

export default withTranslation()(Details);
