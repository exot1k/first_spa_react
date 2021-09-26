/*import React, {FC} from 'react';
import {actions} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {appStateType} from "../../../Redux/ReduxStore";
import {postsDataType} from "../../../types/types";

type MapStatePropsType = {
    postsData?: Array<postsDataType>
    newPostText?: string | null
}

type MapDispatchPropsType = {
    updateNewPostText?: (text: string) => void
    addPost?: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType
let mapStateToProps = (state:appStateType):MapStatePropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewPostText: (text:string) => {
            dispatch(actions.updateNewPostActionCreator(text))
        },
        addPost: () =>{
            dispatch(actions.addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;*/


import React from 'react';
import {actions} from "../../../Redux/ProfileReducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {appStateType} from "../../../Redux/ReduxStore";

const mapStateToProps = (state: appStateType) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const   MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, appStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator,
    updateNewPostText: actions.updateNewPostActionCreator
})(MyPosts);

export default MyPostsContainer;