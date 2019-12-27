import { handleActions, createActions } from "redux-actions";

import initialState, * as handlers from "./handlers";

export const actions = createActions({
    GET_EPISODE_BY_ID: undefined,
    GET_EPISODE_BY_ID_SUCCESS: undefined,
    GET_EPISODE_BY_ID_FAILURE: undefined,
    GET_CHARACTER_NAMES: undefined,
    GET_CHARACTER_NAMES_SUCCESS: undefined,
    GET_CHARACTER_NAMES_FAILURE: undefined
});

const reducer = handleActions(
    new Map([
        [actions.getEpisodeById, handlers.getEpisodeById],
        [actions.getEpisodeByIdSuccess, handlers.getEpisodeByIdSuccess],
        [actions.getEpisodeByIdFailure, handlers.getEpisodeByIdFailure],
        [actions.getCharacterNames, handlers.getCharacterNames],
        [actions.getCharacterNamesSuccess, handlers.getCharacterNamesSuccess],
        [actions.getCharacterNamesFailure, handlers.getCharacterNamesFailure]
    ]),
    initialState
);

export default reducer;