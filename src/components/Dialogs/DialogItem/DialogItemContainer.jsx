import React from 'react';
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/DialogsReducer";
import DialogItem from "./DialogItem";



const DialogItemContainer = (props) => {

    let onAddMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onClickDialog = () => {
    };

    let onChangeNewMessage = (newMessage) => {
        props.store.dispatch(updateNewMessageActionCreator(newMessage));
    }


    return (
        <DialogItem onChangeNewMessage={onChangeNewMessage} onAddMessage={onAddMessage}
                    state={props.state}
                    newMessageText={props.store.getState().dialogsPage.newMessageText}/>
    );

}

export default DialogItemContainer;