import React from 'react';
import {updateNewPostActionCreator, addPostActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text))
    }

    return (
       <MyPosts updateNewPostText={onPostChange} addPost={onAddPost} myPostsData={state.profilePage.myPostsData} />
    );
}

export default MyPostsContainer;