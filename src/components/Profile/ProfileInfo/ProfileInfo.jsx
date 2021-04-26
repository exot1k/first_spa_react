import React from 'react';
import s from './ProfileInfo.module.css';
import pepe_profile from './pepe_profile_info.png'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.img}
                    src={pepe_profile}/>
            </div>
            <div className={s.descriptionBlock} >
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={"test status"}/>
            </div>
        </div>
    );
}

export default ProfileInfo;