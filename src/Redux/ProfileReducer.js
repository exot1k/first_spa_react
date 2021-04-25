import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    profile: null
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

export const  getUserProfile = (userId = 2) => (dispatch) => {
    usersAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export default profileReducer;


