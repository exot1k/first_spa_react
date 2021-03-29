import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let messagesElements =
        props.state.dialogsData.map((el) => <Message message={el.lastMessage}/>);
    let dialogsElements =
        props.state.dialogsData.map((el) => <li className={s.dialogListLi}><DialogItem state={el} /> </li>);

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