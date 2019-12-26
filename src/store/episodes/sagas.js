import { actions as types } from "./index";
import { put, call, takeEvery } from "redux-saga/effects";
import makeApi from "../../api";

function* getEpisodeByIdSaga({ payload }) {
    try {
        let response;
        const custom = makeApi().custom;
        response = yield call([custom, custom.getEpisodeById], payload.id);

        if (response.data) {

            yield put(
                types.getEpisodeByIdSuccess({
                    episode: response.data,
                    id: payload.id
                })
            );
        }
    } catch (error) {
        console.log("errorInSagaGetEpisode");
        yield put(types.processFailure({ error }));
    }
}

function* getCharacterNameSaga({ payload }) {
    try {
        let response;
        const custom = makeApi().custom;
        console.log('getChararcterSaga')
        response = yield call([custom, custom.getCharacterName], payload.id);
        console.log('responeInCharacterName', response)
        if (response.data) {
            console.log('response.dataInCharacterName', response.data)
            yield put(
                types.getCharacterNameSuccess({
                    name: response.data.name,
                    id: payload.id
                })
            );
        }
    } catch (error) {
        yield put(types.processFailure({ error }));
    }
}
const episodesSagas = [
    takeEvery(types.getEpisodeById, getEpisodeByIdSaga),
    takeEvery(types.getCharacterName, getCharacterNameSaga),
];

export default episodesSagas;