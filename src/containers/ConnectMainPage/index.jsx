import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";
import MainPage from "../../components/pages/MainPage";

const mapStateToProps = state => {
  return {
    allCharacters: state.custom.allCharacters
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllCharacters: customActions.getAllCharacters
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
