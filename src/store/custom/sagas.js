import { actions as types } from "./index";
import { put, call, takeEvery } from "redux-saga/effects";
import makeApi from "../../api";

function* getAllCharactersSaga({ payload }) {
    try {
        let response;
        const custom = makeApi().custom;
        response = yield call([custom, custom.getAllCharacters], payload.page);
        console.log("response", response);

        if (response.data) {
            console.log("response.data", response.data);
            console.log("count", response.data.info.count);
            yield put(
                types.getAllCharactersSuccess({
                    characters: response.data.results,
                    total: response.data.info.count
                })
            );
        }
    } catch (error) {
        console.log("errorInSaga");
        yield put(types.processFailure({ error }));
    }
}

const customSagas = [takeEvery(types.getAllCharacters, getAllCharactersSaga)];

export default customSagas;