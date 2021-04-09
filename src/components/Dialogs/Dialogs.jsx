import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import DialogItemContainer from "./DialogItem/DialogItemContainer";


const Dialogs = (props) => {

    /*let messagesElements =
        props.store.getState().dialogsPage.dialogsData.map((el) => <Message message={el.lastMessage}/>);*/

    let dialogsElements =
        props.store.getState().dialogsPage.dialogsData.map((el) =>
            <li className={s.dialogListLi}>
                <DialogItemContainer state={el} store={props.store}/>
            </li>
        );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <ul>
                    {dialogsElements}
                </ul>
            </div>
            {/* <div className={s.dialogsItems}>
                {messagesElements}
            </div>*/}
        </div>
    );
}

export default Dialogs; 