import React, { Component } from "react";
import SearchPanel from "../../moleculas/SearchPanel";
import CharacterCards from "../../organisms/CharacterCards";
import TemplateMainPage from "../../Template/TemplateMainPage";

export default class MainPage extends Component {
  render() {
    return (
      <TemplateMainPage>
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
