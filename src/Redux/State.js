import {observe} from "web-vitals/dist/modules/lib/observe";

let rerenderEntireTree = () => {

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

const addPost = () => {
    let newPost = {
        id: 5,
        message:  state.profilePage.myPostsData.newPostTest,
        likesCount: 0
    };
    state.profilePage.myPostsData.postsData.push(newPost);
    state.profilePage.myPostsData.newPostTest = '';
    rerenderEntireTree(state);
}

const updateBewPostText  = (changeText)  => {
    state.profilePage.myPostsData.newPostTest = changeText;
    rerenderEntireTree(state);
}

export let controll = {
    ProfilePage: {
        MyPostsControll: {
            addPost: addPost,
            updateBewPostText: updateBewPostText,
        }
    }
}

export  const subscribe = (observe) => {
    rerenderEntireTree = observe;
}

export default state;