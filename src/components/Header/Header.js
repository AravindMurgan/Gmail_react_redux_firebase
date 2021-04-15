import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton} from '@material-ui/core';

function Header() {
    return (
        <div className='header' >
             <h1>Hello React Redux , im back!!!</h1>
             <div className="header__left">
                 <IconButton >
                 <MenuIcon />
                 </IconButton>

                 <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png" alt=""/>

             </div>
             <div className="header__middle">

             </div>
             <div className="header__right">

             </div>
        </div>
    )
}

export default Header
