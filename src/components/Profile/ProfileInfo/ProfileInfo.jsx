import React from 'react';
import s from './ProfileInfo.module.css';
import pepe_profile from './pepe_profile_info.png'
import Preloader from "../../common/Preloader/Preloader";

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
                ava + descr
            </div>
        </div>
    );
}

export default ProfileInfo;