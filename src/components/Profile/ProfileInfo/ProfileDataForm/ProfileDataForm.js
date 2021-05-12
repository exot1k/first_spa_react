import React from "react";
import {createField, Input} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './../ProfileInfo.module.css';
import style from "../../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>}

        <div>
            <button>Save</button>
        </div>
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>:
            {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My Professional skills</b>:
            {createField("My Professional skills", "lookingForAJobDescription", [], Input)}
        </div>

        <div>
            <b>About me</b>:{createField("About me", "aboutMe", [], Input)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
             return <div  key={key} className={s.contact} >
                 <b>{key}</b>:
                 {createField(key, "contacts." + key, [], Input)}
             </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({
    form: "editProfile"
})(ProfileDataForm);

export default ProfileDataFormReduxForm;