import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                    src='https://cdni.rbth.com/rbthmedia/images/2019.05/original/5ce3cd0515e9f97318690cc5.jpg'/>
            </div>
            <div className={s.descriptionBlock} >
                ava + descr
            </div>
        </div>
    );
}

export default ProfileInfo;