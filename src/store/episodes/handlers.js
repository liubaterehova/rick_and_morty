const initialState = {};

export const getEpisodeById = (state, { payload }) => {
    console.log("getEpisodeWithoutSuccess", payload);
    return {
        ...state,
        [payload.id]: { isLoading: true }
    };
};

export const getEpisodeByIdSuccess = (state, { payload }) => {
    console.log("episodeInHandlers", payload.episode);
    return {
        ...state,
        [payload.id]: {...state[payload.id], isLoading: false, ...payload.episode }
    };
};

export default initialState;