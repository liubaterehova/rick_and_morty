import { handleActions, createActions } from "redux-actions";

import initialState, * as handlers from "./handlers";

export const actions = createActions({
    GET_ALL_CHARACTERS: undefined,
    GET_ALL_CHARACTERS_SUCCESS: undefined,
    CHANGE_PERSONAL_CARD: undefined,
    ADD_PERSONAL_CARD: undefined,
    GET_STATUSES: undefined,
    CHANGE_SEARCH_TEXT: undefined,
    GET_ONE_CHARACTER: undefined,
    GET_ONE_CHARACTER_SUCCESS: undefined,
    DELETE_CHARACTER: undefined
});

const reducer = handleActions(
    new Map([
        [actions.getAllCharacters, handlers.getAllCharacters],
        [actions.getAllCharactersSuccess, handlers.getAllCharactersSuccess],
        [actions.changePersonalCard, handlers.changePersonalCard],
        [actions.addPersonalCard, handlers.addPersonalCard],
        [actions.getStatuses, handlers.getStatuses],
        [actions.changeSearchText, handlers.changeSearchText],
        [actions.getOneCharacter, handlers.getOneCharacter],
        [actions.getOneCharacterSuccess, handlers.getOneCharacterSuccess],
        [actions.deleteCharacter, handlers.deleteCharacter]
    ]),
    initialState
);

export default reducer;