import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/DialogsReducer";



const DialogItem = (props) => {
    let path = '/dialogs/' + props.state.id;
    let newMessageElements = React.createRef();

    let onAddMessage = () =>
    {
        props.dispatch(sendMessageActionCreator());
    }

    let onClickDialog = () => {
        //debugger;
        //alert("messageText")
    };

    let onChangeNewMessage = (e) => {

        //props.dispatch(updateNewMessageActionCreator(newMessageElements.current.value));
        props.dispatch(updateNewMessageActionCreator(e.target.value));
    }


    return (
        <div>
            <div className={s.dialog}>
                <ul  onClick={onClickDialog}>
                    <li className={s.dialogLi}>
                        <img
                            src={'https://spng.pngfind.com/pngs/s/475-4759930_pepe-meme-rarepepe-slav-russian-pepe-the-frog.png'}/>
                    </li>
                    <li className={s.dialogLi}>
                        <div>
                            <span><NavLink to={path} activeClassName={s.active}> {props.state.name} </NavLink></span>
                            <div>
                                {props.state.lastMessage}
                            </div>
                        </div>

                    </li>
                    <li >
                        <div>
                            <textarea onChange={onChangeNewMessage} ref={newMessageElements} value={props.newMessageText}></textarea>
                        </div>
                        <button onClick={onAddMessage} >Send message</button>
                    </li>
                </ul>

                {/* <div>
                    <img
                        src={'https://spng.pngfind.com/pngs/s/475-4759930_pepe-meme-rarepepe-slav-russian-pepe-the-frog.png'}/>
                </div>
                <div className={s.message}>
                    <span><NavLink to={path} activeClassName={s.active}> {props.state.name} </NavLink></span>
                    <div>
                        {props.state.lastMessage}
                    </div>
                </div>*/}

            </div>
        </div>
    );
}

export default DialogItem;