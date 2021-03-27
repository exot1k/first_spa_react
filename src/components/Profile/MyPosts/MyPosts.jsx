import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {



    let postsElements =  props.postsData.map((el) => (
        <Post title={"Post" + el.id} message={el.message} like={el.likesCount} />));

    return (
        <div className={s.postBlock}>
            <div>
                <h3> My Posts </h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Posts</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;