import React from 'react';
import {actions} from "../../../Redux/DialogsReducer";
import DialogItem from "./DialogItem";
import {connect} from "react-redux";
import {appStateType} from "../../../Redux/ReduxStore";
import {DialogsDataType} from "../../../types/types";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";



type MapStatePropsType = {
    newMessageText:string
    dialogsData:Array<DialogsDataType>
}


let mapStateToProps = (state:appStateType):MapStatePropsType => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData
    }
}



//export default connect(mapStateToProps, {...actions})(DialogItem);

export default
compose<React.ComponentType>(
    connect(mapStateToProps, {...actions})
    ,withAuthRedirect,
    withRouter
)(DialogItem) ;
