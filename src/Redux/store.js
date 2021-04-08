import {observe} from "web-vitals/dist/modules/lib/observe";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";

//const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
//const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

//const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let state = {
    profilePage: {
        myPostsData: {
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
            newPostText: undefined
        },
    },
    dialogsPage: {
        dialogsData: [
            {
                id: 1,
                name: 'Dimych',
                lastMessage: 'Hi',
                icon: ''
            },
            {
                id: 2,
                name: 'Andrey',
                lastMessage: 'How are you?',
                icon: ''
            },
            {
                id: 3,
                name: 'Djohn',
                lastMessage: 'Yo',
                icon: ''
            },
            {
                id: 4,
                name: 'Victor',
                lastMessage: 'Yo',
                icon: ''
            },
            {
                id: 5,
                name: 'Valery',
                lastMessage: 'Yo',
                icon: ''
            },
            {
                id: 6,
                name: 'Sany',
                lastMessage: 'Yo',
                icon: ''
            }],
        newMessageText: ""
    },
    sidebar: {
        bestFriends: [
            {
                id: 1,
                name: 'Dimych',
                icon: ''
            },
            {
                id: 2,
                name: 'Dimych',
                icon: ''
            },
            {
                id: 3,
                name: 'Dimych',
                icon: ''
            }]
    }
}

export let store = {
    _state: state,
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.dialogsPage, action);
        this._calSubscriber(this._state);
    },
    _calSubscriber(){},
    subscribe(observe) {
    this._calSubscriber = observe;
}
}




