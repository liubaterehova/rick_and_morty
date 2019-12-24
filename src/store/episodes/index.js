import { handleActions, createActions } from "redux-actions";

import initialState, * as handlers from "./handlers";

export const actions = createActions({
    GET_EPISODE_BY_ID: undefined,
    GET_EPISODE_BY_ID_SUCCESS: undefined
});

const reducer = handleActions(
    new Map([
        [actions.getEpisodeById, handlers.getEpisodeById],
        [actions.getEpisodeByIdSuccess, handlers.getEpisodeByIdSuccess]
    ]),
    initialState
);

export default reducer;