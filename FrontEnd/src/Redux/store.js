import { combineReducers, legacy_createStore,applyMiddleware } from "redux";
import { reducer as authReducer } from "./Auth/reducer";
import {reducer as noteReducer} from "./Notes/reducer"
import {thunk} from "redux-thunk"

const rootReducer = combineReducers({authReducer,noteReducer});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));