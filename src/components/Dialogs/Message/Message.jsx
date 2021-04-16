import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {


    let path = '/dialogs/' + props.dialogsData.id;

    return (
        <div className={s.dialogs}>
            <ul className={s.dialog}>
                <li className={s.dialogLi}>
                    <img
                        src={'https://spng.pngfind.com/pngs/s/475-4759930_pepe-meme-rarepepe-slav-russian-pepe-the-frog.png'}/>
                </li>
                <li className={s.dialogLi}>
                    <div>
                        <span><NavLink to={path} activeClassName={s.active}> {props.dialogsData.name} </NavLink></span>
                        <div>
                            {props.dialogsData.lastMessage}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Message;