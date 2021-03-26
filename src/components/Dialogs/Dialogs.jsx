import React from 'react';
import s from './Dialogs.module.css';
import classes from "../Navbar/Navbar.module.css";
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


/*const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <div className={s.dialog}>
                <NavLink to={path} activeClassName={s.active}> {props.name} </NavLink>
            </div>
        </div>
    );
}

const Message = (props) => {
    return (
        <div>
            <div className={s.message}> {props.message} </div>
        </div>
    );
}*/


const Dialogs = (props) => {
    let dialogsData = [
        {
            id: 1,
            name: 'Dimych'
        },
        {
            id: 2,
            name: 'Andrey'
        },
        {
            id: 3,
            name: 'Djohn'
        },
        {
            id: 4,
            name: 'Victor'
        },
        {
            id: 5,
            name: 'Valery'
        },
        {
            id: 6,
            name: 'Sany'
        }];

    let dialogsElements =
        dialogsData.map((el) => <DialogItem id={el.id} name={el.name}/>);

    let messagesData = [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are you?'
        },
        {
            id: 3,
            message: 'Yo'
        },
        {
            id: 4,
            message: 'Yo'
        },
        {
            id: 5,
            message: 'Yo'
        },
        {
            id: 6,
            message: 'Yo'
        }];

    let messagesElements =
        messagesData.map((el) => <Message message={el.message}/>);

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