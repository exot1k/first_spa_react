import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let messagesElements =
        props.messagesData.map((el) => <Message message={el.message}/>);
    let dialogsElements =
        props.dialogsData.map((el) => <DialogItem id={el.id} name={el.name}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs; 