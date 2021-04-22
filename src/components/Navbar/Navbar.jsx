import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={'/profile'} activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/dialogs'} activeClassName={classes.activeLink}>Message({props.messageCount})</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/news'} activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/music'} activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/settings'} activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/users'} activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/friends'} activeClassName={classes.activeLink}>Friends</NavLink>
            </div>

            <div className={classes.item}>
                <ul>
                    <li>
                        <img
                            src={'https://spng.pngfind.com/pngs/s/475-4759930_pepe-meme-rarepepe-slav-russian-pepe-the-frog.png'}/>
                    </li>
                    <li>
                        <img
                            src={'https://spng.pngfind.com/pngs/s/475-4759930_pepe-meme-rarepepe-slav-russian-pepe-the-frog.png'}/>
                    </li>
                    <li>
                        <img
                            src={'https://spng.pngfind.com/pngs/s/475-4759930_pepe-meme-rarepepe-slav-russian-pepe-the-frog.png'}/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;