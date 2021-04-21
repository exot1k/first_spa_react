import React from 'react';
import s from './Header.module.css';
import header_pere from './header_pepe.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>

            <img
                src={header_pere}/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'}> Login </NavLink>
                }
            </div>

        </header>
    );
}

export default Header;