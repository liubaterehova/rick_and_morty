import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";
import PersonalCard from "../../components/organisms/PersonalCard";

const mapStateToProps = state => {
  return {
    personalCard: state.custom.personalCard
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePersonalCard: customActions.changePersonalCard
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PersonalCard);
