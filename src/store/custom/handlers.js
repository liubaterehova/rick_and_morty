const initialState = {
    perPage: null,
    allCharacters: [],
    characterCardsOnOnePage: [],
    numberPage: null,
    activeSortButton: "",
    numberOfCharacters: null,
    isLoading: false
};

export const getAllCharacters = (state, { payload }) => ({
    ...state,
    isLoading: true
});

export const getAllCharactersSuccess = (state, { payload }) => {
    console.log("payload.characters");
    return {
        ...state,
        isLoading: false,
        allCharacters: payload.characters
    };
};

export default initialState;