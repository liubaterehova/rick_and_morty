import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import custom from "../custom";
import episodes from "../episodes";

export default history => {
    return combineReducers({
        router: connectRouter(history),
        custom,
        episodes
    });
};