import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div >
            <div>
                My Posts
                <div>
                    new posts
                </div>
                <div className={s.posts}>
                   <Post title={"Post1"} message={"Hi,How are you?"} like={"15"} />
                   <Post title={"Post2"} message={"It's my frist post"} like={"20"} />
                   <Post title={"Post3"}/>
                   <Post title={"Post4"}/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;