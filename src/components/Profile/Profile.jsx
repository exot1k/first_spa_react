import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostsData={props.state.myPostsData} controll={props.controll.MyPostsControll}/>
        </div>
    );
}

export default Profile;