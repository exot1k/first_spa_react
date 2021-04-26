import React from 'react';
import Message from "../Message/Message";
import {Redirect} from "react-router-dom"
const DialogItem = (props) => {

   if(!props.isAuth) return <Redirect to={"/login"} />

    let onAddMessage = () =>
    {
        props.onAddMessage()
    }

    let onChangeNewMessage = (e) => {
        props.onChangeNewMessage(e.target.value);
    }

    let messageItems =
        props.dialogsData.map((el) =>
                <Message dialogsData={el} key={el.id}/>
        );

    return(
        <div>

            <div>
                <textarea onChange={onChangeNewMessage} value={props.newMessageText}></textarea>
            </div>
            <button onClick={onAddMessage} >Send message</button>

            {messageItems}
        </div>
    )
}

export default DialogItem;