import React from 'react';
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/DialogsReducer";
import DialogItem from "./DialogItem";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeNewMessage: (newMessage) => {
            dispatch(updateNewMessageActionCreator(newMessage));
        },
        onAddMessage: () =>{

            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem);



export default DialogItemContainer;