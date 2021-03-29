import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.state.id;
    return (
        <div>
            <div className={s.dialog}>
                <ul >
                    <li className={s.dialogLi} >
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