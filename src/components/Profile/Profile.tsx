import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import  MyPostsContainer   from "./MyPosts/MyPostsContainer";
import {profileType} from "../../types/types";
/**/

type PropsType = {
    profile: profileType
    status: string
    updateStatus: () => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: profileType) => Promise<any>
}

const Profile:React.FC<PropsType> = (props) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         isOwner={props.isOwner}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;