import React from 'react';
import s from './ProfileInfo.module.css';
import pepe_profile from './pepe_profile_info.png'
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                    src={pepe_profile}/>
            </div>
            <div className={s.descriptionBlock} >
                ava + descr
            </div>
        </div>
    );
}

export default ProfileInfo;