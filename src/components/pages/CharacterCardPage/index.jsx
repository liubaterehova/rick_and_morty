import React, { Component } from "react";
import TemplatePersonalCard from "../../Template/TemplataPersonalCard";
import PersonalCardConnected from "../../../containers/ConnectPersonalCard";
export default class CharacterCards extends Component {
  render() {
    return (
      <TemplatePersonalCard>
        <PersonalCardConnected />
      </TemplatePersonalCard>
    );
  }
}
