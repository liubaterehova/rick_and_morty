const initialState = {
    perPage: null,
    allCharacters: [],
    characterCardsOnOnePage: [],
    numberPage: null,
    activeSortButton: '',
    numberOfCharacters: null,
    isLoading: false,
};

export const getAllCharacters = (state, { payload }) => ({
    ...state,
    isLoading: true,

})

export const getAllCharactersSuccess = (state, { payload }) => ({
    ...state,
    isLoading: false,
    allCharacters: payload
})


export default initialState;