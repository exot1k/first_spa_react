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
            return ({...state, ...action.data, isAuth: true})
        default:
            return state;
    }

}

export const setAuthUserData = (userId, login, email) =>
    ({type: SET_USER_DATA, data: {userId, login, email}});

export const getAuth = () => (dispatch) => {
    usersAPI.getAuth().then(
        data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        }
    )
}

export default authReducer;