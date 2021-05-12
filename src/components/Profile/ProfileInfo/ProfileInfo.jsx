import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import pepe_profile from './pepe_profile_info.png'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../Assets/Images/15193c074ae8ef6f13d351602618ee7d.jpg'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onLoadMainPhoto = (e) => {
        debugger
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSaveProfileData = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>
            <div>
                <img className={s.img}
                     src={pepe_profile}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onLoadMainPhoto}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={props.profile} {...props} onSubmit={onSaveProfileData}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner}
                                   goToEditMode={() => {setEditMode(true)}}/>}


            </div>
        </div>
    );
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b> : {contactValue}
    </div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}
        </div>

        {profile.lookingForAJob && <div>
            <b>My Professional skills</b>: {profile.lookingForAJobDescription}
        </div>}

        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}




export default ProfileInfo;