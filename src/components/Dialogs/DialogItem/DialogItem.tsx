import React, {ChangeEvent, ChangeEventHandler, FC} from 'react';
import Message from "../Message/Message";
import {Redirect} from "react-router-dom"
import {DialogsDataType} from "../../../types/types";

type propsType = {
    dialogsData: Array<DialogsDataType>
    sendMessage: () => void
    updateNewMessage: (e: string) => void
    newMessageText:string
}

const DialogItem: FC<propsType> = (props) => {

    let onAddMessage = () =>
    {
        props.sendMessage()
    }

    let onChangeNewMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        props.updateNewMessage(e.target.value);
    }

    let messageItems =
        props.dialogsData.map((el) =>
                <Message dialogsData={el} key={el.id}/>
        );

    return(
        <div>
            <div>
                <textarea onChange={e=>onChangeNewMessage(e)} value={props.newMessageText}></textarea>
            </div>
            <button onClick={onAddMessage} >Send message</button>

            {messageItems}
        </div>
    )
}

export default DialogItem;