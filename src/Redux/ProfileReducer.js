import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        {
            id: 1,
            message: 'Hi,How are you',
            likesCount: 12
        },
        {
            id: 2,
            message: 'It\'s my frist post?"',
            likesCount: 11
        },
        {
            id: 3,
            message: 'Yo',
            likesCount: 0
        },
        {
            id: 4,
            message: 'Yo',
            likesCount: 0
        },
        {
            id: 5,
            message: 'Yo',
            likesCount: 0
        },
        {
            id: 6,
            message: 'Yo',
            likesCount: 0
        }],
    newPostText: undefined,
    profile: null,
    status: null
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        postsData: [...state.postsData]
    }
    switch (action.type) {

        case ADD_POST:

            return (
                {
                    ...state,
                    postsData: [...state.postsData, {
                        id: 5,
                        message: stateCopy.newPostText,
                        likesCount: 0
                    }],
                    newPostText: ''
                })
        case UPDATE_NEW_POST_TEXT:
            return ({...state, newPostText: action.newText});
        case SET_USER_PROFILE:
            return ({...state, profile: action.profile})
        case SET_STATUS:
            return ({...state, status: action.status})
        case DELETE_POST:
            return ({...state, postsData: state.postsData.filter( p => p.id != action.postId)})
        case SAVE_PHOTO_SUCCESS:
            return ({...state, profile: {...state.profile, photos: action.photos } })
        default:
            return state;

    }
}

export const addPostActionCreator = () =>
    ({type: ADD_POST})

export const updateNewPostActionCreator = (newText) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText})

export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) =>
    ({type: SET_STATUS, status})

export const  deletePost = (postId) =>
        ({type: DELETE_POST, postId})

export const  savePhotoSuccess = (photos) =>
        ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}
export const getUserStatus = (userId) => async (dispatch) => {
    const response = await usersAPI.getUserStatus(userId)
        dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    const response = await  usersAPI.updateUserStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await  usersAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await  usersAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }else{
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("editProfile", {_error: message}))
        return Promise.reject(message)
    }
}



export default profileReducer;


