import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";
import MainPage from "../../components/pages/MainPage";

const mapStateToProps = state => {
  return {
    allCharacters: state.custom.allCharacters,
    total: state.custom.total,
    isLoading: state.custom.isLoading,
    searchText: state.custom.searchText,
    oneCharacterById: state.custom.oneCharacterById
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllCharacters: customActions.getAllCharacters,
      addPersonalCard: customActions.addPersonalCard,
      getStatuses: customActions.getStatuses,
      changeSearchText: customActions.changeSearchText,
      getOneCharacter: customActions.getOneCharacter
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
