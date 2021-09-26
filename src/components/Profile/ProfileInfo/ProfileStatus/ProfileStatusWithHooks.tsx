import React, {useEffect, useState} from 'react';


const ProfileStatusWithHooks = (props:any) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const changeEditMode = () => {
        setEditMode(!editMode)
        if (editMode) {
            props.updateStatus(status);
        }
    }

    const onStatusChange = (e:any) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode ?
                <div>
                    <b>Status</b>: <span onDoubleClick={() => {
                    changeEditMode()
                }}> {props.status || "Введите статус"}</span>
                </div>
                :
                <div>
                    <input autoFocus={true} onBlur={() => {
                        changeEditMode()
                    }} onChange={onStatusChange} value={status}/>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;