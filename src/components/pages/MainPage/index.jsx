import React, { Component } from "react";
import SearchPanel from "../../moleculas/SearchPanel";
import ListCharacters from "../../organisms/ListCharacters";
import TemplateMainPage from "../../Template/TemplateMainPage";

export default class MainPage extends Component {
  render() {
    console.log("charactersinMainPAge", this.props.allCharacters);
    console.log("totalInMAinPAge", this.props.total);
    return (
      <TemplateMainPage>
        <SearchPanel />
        <ListCharacters
          characters={this.props.allCharacters}
          rangeOfCharacters={this.props.rangeOfCharacters}
          total={this.props.total}
          getAllCharacters={this.props.getAllCharacters}
          isLoading={this.props.isLoading}
        />
      </TemplateMainPage>
    );
  }
}
