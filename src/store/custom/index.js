import { handleActions, createActions } from "redux-actions";

import initialState, * as handlers from "./handlers";

export const actions = createActions({
    GET_ALL_CHARACTERS: undefined,
    GET_ALL_CHARACTERS_SUCCESS: undefined,
    CHANGE_PERSONAL_CARD: undefined,
    ADD_PERSONAL_CARD: undefined,
});

const reducer = handleActions(
    new Map([
        [actions.getAllCharacters, handlers.getAllCharacters],
        [actions.getAllCharactersSuccess, handlers.getAllCharactersSuccess],
        [actions.changePersonalCard, handlers.changePersonalCard],
        [actions.addPersonalCard, handlers.addPersonalCard],
    ]),
    initialState
);

export default reducer;