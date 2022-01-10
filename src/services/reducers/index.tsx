import { combineReducers } from "redux";
import BuscaCepReducer from "./BuscaCepReducer";

const reducers = combineReducers({
    buscacep:BuscaCepReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;