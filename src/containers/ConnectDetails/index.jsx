import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";
import { actions as episodesActions } from "../../store/episodes";
import Details from "../../components/organisms/Details";

const mapStateToProps = state => {
  return {
    oneCharacterById: state.custom.oneCharacterById,
    episodes: state.episodes.episodes,
    isLoadingOnePerson: state.custom.isLoadingOnePerson,
    characterNames: state.episodes.characterNames,
    isLoadingСharacterNames: state.episodes.isLoadingСharacterNames
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getOneCharacter: customActions.getOneCharacter,
      getEpisodeById: episodesActions.getEpisodeById,
      getCharacterNames: episodesActions.getCharacterNames
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Details);
