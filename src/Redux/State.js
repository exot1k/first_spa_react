import {observe} from "web-vitals/dist/modules/lib/observe";

let _calSubscriber = () => {

}

let state ={
    profilePage: {
        myPostsData: {
            postsData:  [
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
            newPostTest: undefined
        },
    },
    dialogsPage:  {
        dialogsData: [
            {
                id: 1,
                name: 'Dimych',
                lastMessage:'Hi',
                icon: ''
            },
            {
                id: 2,
                name: 'Andrey',
                lastMessage:'How are you?',
                icon: ''
            },
            {
                id: 3,
                name: 'Djohn',
                lastMessage:'Yo',
                icon: ''
            },
            {
                id: 4,
                name: 'Victor',
                lastMessage:'Yo',
                icon: ''
            },
            {
                id: 5,
                name: 'Valery',
                lastMessage:'Yo',
                icon: ''
            },
            {
                id: 6,
                name: 'Sany',
                lastMessage:'Yo',
                icon: ''
            }]
    },
    sitebar: {
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

const subscribe = (observe) => {
    _calSubscriber = observe;
}

export let store = {
    _state: state,
    getState(){
        return this._state;
    },

    _updateNewPostText(newText) {
        this._state.profilePage.myPostsData.newPostTest = newText;
        _calSubscriber(this);
    },
    _addPost(){
        let newPost = {
            id: 5,
            message:  this._state.profilePage.myPostsData.newPostTest,
            likesCount: 0
        };
        this._state.profilePage.myPostsData.postsData.push(newPost);
        this._state.profilePage.myPostsData.newPostTest = '';
        _calSubscriber(this);
    },
    dispatch(action){
        if (action.type === 'ADD-POST'){
           this._addPost();
        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._updateNewPostText(action.newText)
        }
    },
    subscribe
}
