import React, { Component } from "react";
import TemplatePersonalCard from "../../Template/TemplataPersonalCard";
import PersonalCard from "../../organisms/PersonalCard";
export default class CharacterCard extends Component {
  render() {
    return (
      <TemplatePersonalCard>
        <PersonalCard />
      </TemplatePersonalCard>
    );
  }
}
