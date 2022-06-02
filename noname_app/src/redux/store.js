import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profileReducer";
import { reducer as formReducer } from 'redux-form'
import newsReducer from "./newsReduser";
import thunk from "redux-thunk";

const reducer = combineReducers({
    profilePage: profileReducer,
    form: formReducer,
    newsPage: newsReducer,
})


export const store = legacy_createStore(reducer,applyMiddleware(thunk))

window.store = store


