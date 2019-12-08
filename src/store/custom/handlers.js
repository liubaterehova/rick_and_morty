const initialState = {
    perPage: null,
    allCharacters: [],
    characterCardsOnOnePage: [],
    rangeOfCharacters: [],
    numberOfPage: 1,
    activeSortButton: "",
    numberOfCharacters: null,
    isLoading: false,
    total: null
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

export default initialState;