import {usersAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {photosType,profileType, postsDataType} from "../types/types";
import {baseThunkType, inferActionTypes} from "./ReduxStore";

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
        }] as Array<postsDataType>,
    newPostText: '' as  string,
    profile: null as profileType | null,
    status: "",
}

type initialStateType = typeof initialState
type ActionTypes = inferActionTypes<typeof actions>
type ThunkType = baseThunkType<ActionTypes | FormAction>

const profileReducer = (state = initialState, action: ActionTypes): initialStateType => {
    let stateCopy = {
        ...state,
        postsData: [...state.postsData]
    }
    switch (action.type) {
        case 'ADD_POST':

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
        case 'UPDATE_NEW_POST_TEXT':
            return ({...state, newPostText: action.newText});
        case 'SET_USER_PROFILE':
            return ({...state, profile: action.profile})
        case 'SET_STATUS':
            return ({...state, status: action.status})
        case 'DELETE_POST':
            return ({...state, postsData: state.postsData.filter(p => p.id != action.postId)})
        case 'SAVE_PHOTO_SUCCESS':
            return ({...state, profile: {...state.profile, photos: action.photos} as profileType})
        default:
            return state;
    }
}

export const actions = {
    addPostActionCreator: () => ({type: 'ADD_POST'} as const),
    updateNewPostActionCreator: (newText: string) => ({
        type: 'UPDATE_NEW_POST_TEXT',
        newText: newText
    } as const),
    setUserProfile: (profile: profileType) => ({type: 'SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: photosType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const)
}


export const getUserProfile = (userId: number | null):ThunkType => async (dispatch) => {
    dispatch(actions.setUserProfile(await usersAPI.getUserProfile(userId)));
}
export const getUserStatus = (userId: number):ThunkType => async (dispatch) => {
    dispatch(actions.setStatus(await usersAPI.getUserStatus(userId)));
}
export const updateStatus = (status: string):ThunkType => async (dispatch) => {
    const response = await usersAPI.updateUserStatus(status)
    if (response.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}
export const savePhoto = (file: File):ThunkType => async (dispatch) => {
    const response = await usersAPI.savePhoto(file)
    if (response.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(response.data.photos));
    }
}

export const saveProfile = (profile: profileType):ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await usersAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("editProfile", {_error: message}))
        return Promise.reject(message)
    }
}

export default profileReducer;


