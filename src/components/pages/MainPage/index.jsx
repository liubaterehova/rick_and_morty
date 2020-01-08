import React, { Component } from "react";
import SearchPanel from "../../moleculas/SearchPanel";
import CharacterCards from "../../organisms/CharacterCards";
import TemplateMainPage from "../../Template/TemplateMainPage";
import { Button } from "antd";
import { withTranslation } from "react-i18next";

class MainPage extends Component {
  render() {
    return (
      <TemplateMainPage>
        <Button
          size="large"
          onClick={() => this.props.i18n.changeLanguage("ru")}
        >
          ru
        </Button>
        <Button
          size="large"
          onClick={() => this.props.i18n.changeLanguage("en")}
        >
          en
        </Button>
        <SearchPanel changeSearchText={this.props.changeSearchText} />
        <CharacterCards
          characters={this.props.allCharacters}
          rangeOfCharacters={this.props.rangeOfCharacters}
          total={this.props.total}
          getAllCharacters={this.props.getAllCharacters}
          isLoading={this.props.isLoading}
          addPersonalCard={this.props.addPersonalCard}
          getStatuses={this.props.getStatuses}
          searchText={this.props.searchText}
          getOneCharacter={this.props.getOneCharacter}
        />
      </TemplateMainPage>
    );
  }
}
export default withTranslation()(MainPage);
