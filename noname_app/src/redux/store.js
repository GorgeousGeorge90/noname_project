import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profileReducer";
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
    profilePage: profileReducer,
    form: formReducer,
})


export const store = legacy_createStore(reducer)

window.store = store


