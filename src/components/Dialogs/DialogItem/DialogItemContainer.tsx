import React from 'react';
import {actions} from "../../../Redux/DialogsReducer";
import DialogItem from "./DialogItem";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {appStateType} from "../../../Redux/ReduxStore";
import {DialogsDataType} from "../../../types/types";
import {followUpdate, getUsers} from "../../../Redux/UserReducer";


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



export default connect(mapStateToProps, {...actions})(DialogItem);

/*export default
compose(
    connect(mapStateToProps, {...actions})
    , withAuthRedirect
)(DialogItem) as React.ComponentType;*/
