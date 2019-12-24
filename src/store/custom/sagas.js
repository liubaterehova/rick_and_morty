import { actions as types } from "./index";
import { put, call, takeEvery } from "redux-saga/effects";
import makeApi from "../../api";

function* getAllCharactersSaga({ payload }) {
    try {
        let response;
        const custom = makeApi().custom;
        response = yield call([custom, custom.getAllCharacters], payload.page);

        if (response.data) {
            yield put(
                types.getAllCharactersSuccess({
                    characters: response.data.results,
                    total: response.data.info.count
                })
            );
        }
    } catch (error) {
        yield put(types.processFailure({ error }));
    }
}

function* getOneCharacterSaga({ payload }) {
    try {
        let response;
        const custom = makeApi().custom;
        response = yield call([custom, custom.getOneCharacter], payload.id);

        if (response.data) {
            yield put(
                types.getOneCharacterSuccess({
                    character: response.data
                })
            );
        }
    } catch (error) {
        yield put(types.processFailure({ error }));
    }
}

// function* getEpisodeByIdSaga({ payload }) {
//     try {
//         let response;
//         const custom = makeApi().custom;
//         response = yield call([custom, custom.getEpisodeById], payload.id);

//         if (response.data) {
//             console.log("response.data", response.data);
//             yield put(
//                 types.getEpisodeByIdSuccess({
//                     episode: response.data,
//                     id: payload.id
//                 })
//             );
//         }
//     } catch (error) {
//         console.log("errorInSgaGetEpisode");
//         yield put(types.processFailure({ error }));
//     }
// }
const customSagas = [
    takeEvery(types.getAllCharacters, getAllCharactersSaga),
    takeEvery(types.getOneCharacter, getOneCharacterSaga)
    // takeEvery(types.getEpisodeById, getEpisodeByIdSaga)
];

export default customSagas;