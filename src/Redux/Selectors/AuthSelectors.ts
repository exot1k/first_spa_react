import {appStateType} from "../ReduxStore";

export const selectIsAuth = (state: appStateType) => {
    return state.auth.isAuth
}

export const selectCurrentUserLogin = (state: appStateType) => {
    return state.auth.login
}

