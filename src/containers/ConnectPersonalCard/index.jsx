import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";
import PersonalCard from "../../components/organisms/PersonalCard";

const mapStateToProps = state => {
  return {
    personalCard: state.custom.personalCard,
    statuses: state.custom.statuses,
    oneCharacterById: state.custom.oneCharacterById
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePersonalCard: customActions.changePersonalCard,
      getOneCharacter: customActions.getOneCharacter,
      deleteCharacter: customActions.deleteCharacter
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PersonalCard);
