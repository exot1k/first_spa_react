import React from 'react';
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/DialogsReducer";
import DialogItem from "./DialogItem";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const AuthRedirectComponent = withAuthRedirect(DialogItem);


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeNewMessage: (newMessage) => {
            dispatch(updateNewMessageActionCreator(newMessage));
        },
        onAddMessage: () => {

            dispatch(sendMessageActionCreator());
        }
    }
}


//const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogItem);
