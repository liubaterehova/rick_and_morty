import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";
import { actions as episodesActions } from "../../store/episodes";
import Details from "../../components/organisms/Details";

const mapStateToProps = state => {
  return {
    oneCharacterById: state.custom.oneCharacterById,
    episodes: state.episodes
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getOneCharacter: customActions.getOneCharacter,
      getEpisodeById: episodesActions.getEpisodeById
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Details);
