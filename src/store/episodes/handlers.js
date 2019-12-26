const initialState = {
    episodes: {},
    characterNames: {},
    error: null,
};

export const getEpisodeById = (state, { payload }) => {
    console.log('payloadEpisodeById', payload)
    return {
        ...state,
        episodes: {...state.episodes,
            [payload.id]: {...state.episodes[payload.id], isLoading: true },
        }
    }
};
export const getEpisodeByIdSuccess = (state, { payload }) => {
    console.log('payloadEpisode', payload);
    return {
        ...state,
        episodes: {...state.episodes,
            [payload.id]: {...state.episodes[payload.id], isLoading: false, ...payload.episode }
        }
    }
};

export const processFailure = (state, { payload }) => {
    console.log('processFailure', payload)
    return {
        ...state,
        error: payload
    }
};


export const getCharacterName = (state, { payload }) => {
    console.log('characterNamePayload', payload)
    return {
        ...state,
        characterNames: {...state.characterNames,
            [payload.id]: {...state.characterNames[payload.id], isLoadingCharacterName: true },
        }
    };
};

export const getCharacterNameSuccess = (state, { payload }) => {
    console.log('payloadInChararcterNameSuccess', payload)
    return {
        ...state,
        characterNames: {...state.characterNames,
            [payload.id]: {...state.characterNames[payload.id], isLoadingCharacterName: false, name: payload.name }
        }
    }
};

export default initialState;