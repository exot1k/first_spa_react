import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {updateNewPostActionCreator, addPostActionCreator} from "../../../Redux/ProfileReducer";



const MyPosts = (props) => {

    let postsElements =  props.myPostsData.postsData.map((el) => (
        <Post title={"Post" + el.id} message={el.message} like={el.likesCount} />));

    let newPostElement = React.createRef();
    let onAddPost = () => {
        //props.myPostsController.addPost();
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        //props.myPostsController.updateNewPostText(newPostElement.current.value)
        props.dispatch(updateNewPostActionCreator(newPostElement.current.value))
    }

    return (
        <div className={s.postBlock}>
            <div>
                <h3> My Posts </h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.myPostsData.newPostText}/>
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
}

export default MyPosts;