import React, {ChangeEvent, FC, useState} from 'react';
import s from './ProfileInfo.module.css';
import pepe_profile from './pepe_profile_info.png'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../Assets/Images/15193c074ae8ef6f13d351602618ee7d.jpg'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {contactsType, profileType} from "../../../types/types";

type propsType = {
    isOwner: boolean
    profile: profileType | null
    savePhoto: (file:File) => void
    saveProfile: (profile:profileType) => Promise<any>
    status: string
    updateStatus: (status:string) => void
}
const ProfileInfo: React.FC<propsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onLoadMainPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSaveProfileData = (formData:profileType) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>
           {/* <div>
                <img className={s.img}
                     src={pepe_profile}/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto}/>
                {isOwner && <input type={"file"} onChange={onLoadMainPhoto}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSaveProfileData}/>
                    : <ProfileData profile={profile} isOwner={isOwner}
                                   goToEditMode={() => {setEditMode(true)}}/>}


            </div>
        </div>
    );
}

type contactsPropsType = {
    contactTitle:string
    contactValue:string
}
const Contact:React.FC<contactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b> : {contactValue}
    </div>
}

type profileDataPropsType = {
    profile:profileType
    isOwner:boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<profileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
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
            <b>Contacts</b>: {
            Object
                .keys(profile.contacts)
                .map((key) => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof contactsType]}/>
        })}
        </div>
    </div>
}




export default ProfileInfo;