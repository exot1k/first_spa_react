import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {postsDataType} from "../../../types/types";


export type DispatchPropsType = {
    addPost: () => void
    updateNewPostText: (currentRef: string) => void
}

export type MapPropsType = {
    postsData: Array<postsDataType>
    newPostText: string
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
    console.log("render")
    let postsElements = props.postsData.map((el) => (
        <Post title={"Post" + el.id} message={el.message} like={el.likesCount} key={el.id}/>));

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        props.updateNewPostText(newPostElement.current!.value)
    }

    return (
        <div className={s.postBlock}>
            <div>
                <h3> My Posts </h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Posts</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};



const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;