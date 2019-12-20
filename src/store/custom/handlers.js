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
};

export const getAllCharacters = (state, { payload }) => ({
    ...state,
    isLoading: true
});

export const getAllCharactersSuccess = (state, { payload }) => {
    console.log("payload.characters");
    console.log("total", payload.total);
    return {
        ...state,
        isLoading: false,
        allCharacters: payload.characters,
        total: payload.total
    };
};

export const addPersonalCard = (state, { payload }) => {
    console.log('payloadAddCharacterCard', payload);
    return {
        ...state,
        personalCard: payload,
    }
}

export const changePersonalCard = (state, { payload }) => {
    console.log('payload', payload);
    let index = state.allCharacters.findIndex((character) => character.id === payload.id)
    let leftPart = [...state.allCharacters.splice(0, index)];
    let rightPart = [...state.allCharacters.splice(index + 1)];
    let arr = [...leftPart, payload, ...rightPart];
    console.log('arrr', arr);
    return {
        ...state,
        allCharacters: [...leftPart, payload, ...rightPart]
    }
}

export default initialState;