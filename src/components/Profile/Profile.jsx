import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                    src='https://cdni.rbth.com/rbthmedia/images/2019.05/original/5ce3cd0515e9f97318690cc5.jpg'/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;