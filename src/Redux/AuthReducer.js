import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return ({...state, ...action.payload})
        default:
            return state;
    }

}

export const setAuthUserData = (userId, login, email, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}});

export const getAuth = () => (dispatch) => {
    usersAPI.getAuth().then(
        data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        }
    )
}

export const login = (email,password, rememberMe) => (dispatch) => {
    usersAPI.login(email,password, rememberMe).then(
        data => {
            if (data.resultCode === 0) {
               dispatch(getAuth())
            }
        }
    )
}
export const logout = (email,password, rememberMe) => (dispatch) => {
    usersAPI.logout().then(
        data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        }
    )
}

export default authReducer;