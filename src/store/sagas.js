import { all } from "redux-saga/effects";
import customSaga from "./custom/sagas";
import episodesSaga from "./episodes/sagas";

export default function* rootSaga() {
    yield all([...customSaga, ...episodesSaga]);
}