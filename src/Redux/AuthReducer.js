import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return ({...state, ...action.payload})
        case GET_CAPTCHA_URL_SUCCESS:
            return ({...state, captchaUrl: action.captchaUrl})
        default:
            return state;
    }

}

export const setAuthUserData = (userId, login, email, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl) =>
    ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl});

export const getAuth = () => async (dispatch) => {
    let data = await usersAPI.getAuth();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }

}

export const login = (email, password, rememberMe,captcha) => async (dispatch) => {
    let data = await usersAPI.login(email, password, rememberMe,captcha);
    if (data.resultCode === 0) {
        dispatch(getAuth())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = (email, password, rememberMe) => (dispatch) => {
    usersAPI.logout().then(
        data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        }
    )
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await usersAPI.getCaptchaUrl();
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))

}

export default authReducer;