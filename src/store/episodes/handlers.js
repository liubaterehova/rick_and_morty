const initialState = {
    episodes: {},
    characterNames: {}
};

export const getEpisodeById = (state, { payload }) => {
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
export const getCharacterName = (state, { payload }) => {
    return {
        ...state,
        characterNames: {...state.characterNames,
            [payload.id]: {...state.characterNames[payload.id], isLoadingCharacterName: true },
        }
    };
};

export const getCharacterNameSuccess = (state, { payload }) => {
    console.log('payloadInChararcterName')
    return {
        ...state,
        characterNames: {...state.characterNames,
            [payload.id]: {...state.characterNames[payload.id], isLoadingCharacterName: false, name: payload.name }
        }
    }
};

export default initialState;