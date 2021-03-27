import React from 'react';
import s from './Header.module.css';
import header_pere from './header_pepe.png'

const Header = () => {
    return(
    <header className={s.header}>
        <img
            src={header_pere} />
    </header>
    );
}

export default  Header;