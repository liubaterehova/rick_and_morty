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
        yield put(types.getEpisodeByIdFailure({ error, id: payload.id }));
    }
}
const makeArrOfNames = arr => {
    let arr2 = arr.map(obj => obj.name);
    console.log("arr2", arr2);
    return arr2;
};

function* getCharacterNamesSaga({ payload }) {
    //payload -массив из  id
    console.log("getCharacterNamesSaga");
    try {
        let response;
        const custom = makeApi().custom;
        console.log("getChararcterSaga");
        response = yield call([custom, custom.getCharacterNames], payload.ids);
        console.log("responeInCharacterName", response);
        if (response.data) {
            console.log("response.dataInCharacterName", response.data);
            yield put(
                types.getCharacterNamesSuccess({
                    names: makeArrOfNames(response.data)
                })
            );
        }
    } catch (error) {
        yield put(types.getCharacterNamesFailure({ error }));
    }
}
const episodesSagas = [
    takeEvery(types.getEpisodeById, getEpisodeByIdSaga),
    takeEvery(types.getCharacterNames, getCharacterNamesSaga)
];

export default episodesSagas;