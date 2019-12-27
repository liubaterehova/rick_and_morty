const initialState = {
    episodes: {},
    characterNames: [],
    isLoadingСharacterNames: false,
    errorInCharacterNames: null
};

export const getEpisodeById = (state, { payload }) => {
    console.log("payloadEpisodeById", payload);
    return {
        ...state,
        episodes: {
            ...state.episodes,
            [payload.id]: {
                ...state.episodes[payload.id],
                isLoading: true
            }
        }
    };
};

export const getEpisodeByIdSuccess = (state, { payload }) => {
    console.log("payloadEpisode", payload);
    return {
        ...state,
        episodes: {
            ...state.episodes,
            [payload.id]: {
                ...state.episodes[payload.id],
                isLoading: false,
                ...payload.episode
            }
        }
    };
};

export const getEpisodeByIdFailure = (state, { payload }) => {
    console.log("processFailure", payload);
    return {
        ...state,
        episodes: {
            ...state.episodes,
            [payload.id]: {
                ...state.episodes[payload.id],
                isLoading: false,
                error: payload.error
            }
        }
    };
};

export const getCharacterNames = (state, { payload }) => {
    console.log("characterNamePayload", payload);
    return {
        ...state,
        isLoadingСharacterNames: true
    };
};

export const getCharacterNamesSuccess = (state, { payload }) => {
    //payload - arr of Names
    console.log("payloadInChararcterNameSuccess", payload);
    return {
        ...state,
        characterNames: payload.names,
        isLoadingСharacterNames: false
    };
};

// TODO add action and fix saga
export const getCharacterNamesFailure = (state, { payload }) => {
    console.log("processFailure", payload);
    return {
        ...state,
        isLoadingСharacterNames: false,
        errorInCharacterNames: payload
    };
};

// export const getCharacterNames = (state, { payload }) => {
//     console.log("characterNamePayload", payload);
//     return {
//         ...state,
//         characterNames: {
//             ...state.characterNames,
//             [payload.id]: {
//                 ...state.characterNames[payload.id],
//                 isLoadingCharacterName: true
//             }
//         }
//     };
// };

// export const getCharacterNamesSuccess = (state, { payload }) => {
//     console.log("payloadInChararcterNameSuccess", payload);
//     return {
//         ...state,
//         characterNames: {
//             ...state.characterNames,
//             [payload.id]: {
//                 ...state.characterNames[payload.id],
//                 isLoadingCharacterName: false,
//                 name: payload.name
//             }
//         }
//     };
// };

// // TODO add action and fix saga
// export const getCharacterNamesFailure = (state, { payload }) => {
//     console.log("processFailure", payload);
//     return {
//         ...state,
//         episodcharacterNameses: {
//             ...state.episodes,
//             [payload.id]: {
//                 ...state.characterNames[payload.id],
//                 isLoadingСharacterNames: false,
//                 error: payload.error
//             }
//         }
//     };
// };

export default initialState;