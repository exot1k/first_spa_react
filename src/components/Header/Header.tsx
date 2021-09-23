import React, {FC} from 'react';
import s from './Header.module.css';
import header_pere from './header_pepe.png'
import {NavLink} from "react-router-dom";
type propsType = {
    isAuth:boolean
    login: string | null
    logout: () => void
}
const Header: FC<propsType> = (props) => {
    return (
        <header className={s.header}>

            <img
                src={header_pere}/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}> Login </NavLink>
                }
            </div>

        </header>
    );
}

export default Header;