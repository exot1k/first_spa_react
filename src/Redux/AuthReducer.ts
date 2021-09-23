import {ResultCodes, usersAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {baseThunkType, inferActionTypes} from "./ReduxStore";

export type initialStateType = typeof initialState
type ActionTypes = inferActionTypes<typeof actions>
type ThunkType = baseThunkType<ActionTypes | FormAction>

let initialState  = {
    userId: null as (number | null),
    email: null as(string | null),
    login: null as (string | null),
    isAuth: false ,
    captchaUrl: null as(string | null)
}


const authReducer = (state = initialState, action : ActionTypes):initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return ({...state, ...action.payload})
        case 'GET_CAPTCHA_URL_SUCCESS':
            return ({...state, captchaUrl: action.captchaUrl})
        default:
            return state;
    }

}

export const actions = {
    setAuthUserData: (userId: number | null, login: string | null, email:string | null, isAuth:boolean) =>
        ({type: 'SET_USER_DATA', payload: {userId, login, email, isAuth}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) =>
        ({type: 'GET_CAPTCHA_URL_SUCCESS', captchaUrl} as const)
}


export const getAuth = ():ThunkType => async (dispatch) => {
    let data = await usersAPI.getAuth();
    if (data.resultCode === ResultCodes.Success) {
        let {id, login, email} = data.data;
        dispatch(actions.setAuthUserData(id, login, email, true));
    }

}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string):ThunkType => async (dispatch) => {
    let data = await usersAPI.login(email, password, rememberMe,captcha);
    if (data.resultCode === ResultCodes.Success) {
        dispatch(getAuth())
    } else {
        if (data.resultCode === ResultCodes.CaptchaIsRequired   ) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = ():ThunkType => async (dispatch) => {
    usersAPI.logout().then(
        (data ) => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch(actions.setAuthUserData(null, null, null, false));
            }
        }
    )
}
export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    let data = await usersAPI.getCaptchaUrl();
    const captchaUrl = data.url

    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))

}

export default authReducer;