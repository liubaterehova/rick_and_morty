import { actions as types } from "./index";
import { put, call, takeEvery } from "redux-saga/effects";
import makeApi from "../../api";

function* getAllCharactersSaga({ payload }) {
    try {
        let response;
        const custom = makeApi().custom;
        response = yield call([custom, custom.getAllCharacters]);

        if (response.data) {
            console.log("response.data", response.data);
            yield put(types.getAllCharactersSuccess({ payload }));
        }
    } catch (error) {
        yield put(types.processFailure({ error }));
    }
}

const customSagas = [takeEvery(types.getAllCharacters, getAllCharactersSaga)];

export default customSagas;