import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UserReducer";
import authReducer from "./AuthReducer";
import thunk, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./AppReducer";

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>

export type  inferActionTypes<T> = T extends  {[keys: string]: (...args: any[])=> infer U} ? U : never

export type baseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, appStateType, any, A>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});



const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;

export default store;
