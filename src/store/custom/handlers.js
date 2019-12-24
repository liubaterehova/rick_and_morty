const initialState = {
    perPage: null,
    allCharacters: [],
    characterCardsOnOnePage: [],
    rangeOfCharacters: [],
    numberOfPage: 1,
    activeSortButton: "",
    numberOfCharacters: null,
    isLoading: false,
    total: null,
    personalCard: null,
    statuses: [],
    searchText: "",
    oneCharacterById: null,
    isLoadingOnePerson: false
        // oneEpisode: []
};

export const getAllCharacters = (state, { payload }) => ({
    ...state,
    isLoading: true
});

export const deleteCharacter = (state, { payload }) => {
    let index = state.allCharacters.findIndex(
        character => character.id === payload.id
    );
    let leftPart = [...state.allCharacters.splice(0, index)];
    let rightPart = [...state.allCharacters.splice(index + 1)];
    return {
        ...state,
        allCharacters: [...leftPart, ...rightPart]
    };
};
export const getAllCharactersSuccess = (state, { payload }) => {
    return {
        ...state,
        isLoading: false,
        allCharacters: payload.characters,
        total: payload.total
    };
};

export const addPersonalCard = (state, { payload }) => {
    return {
        ...state,
        personalCard: payload
    };
};
export const getStatuses = (state, { payload }) => {
    const set = new Set();
    state.allCharacters.map(character => set.add(character.status));
    return {
        ...state,
        statuses: Array.from(set)
    };
};
export const changePersonalCard = (state, { payload }) => {
    let index = state.allCharacters.findIndex(
        character => character.id === payload.id
    );
    let leftPart = [...state.allCharacters.splice(0, index)];
    let rightPart = [...state.allCharacters.splice(index + 1)];

    return {
        ...state,
        allCharacters: [...leftPart, payload, ...rightPart]
    };
};

export const getOneCharacter = (state, { payload }) => {
    return {
        ...state,
        isLoadingOnePerson: true
    };
};

export const getOneCharacterSuccess = (state, { payload }) => {
    return {
        ...state,
        isLoadingOnePerson: false,
        oneCharacterById: payload.character
    };
};

export const changeSearchText = (state, { payload }) => {
    return {
        ...state,
        searchText: payload
    };
};

// export const getEpisodeById = (state, { payload }) => {
//     return {
//         ...state
//     };
// };

// export const getEpisodeByIdSuccess = (state, { payload }) => {
//     console.log("episodeInHandlers", payload.episode);
//     return {
//         ...state,
//         oneEpisode: payload.episode
//     };
// };
export default initialState;