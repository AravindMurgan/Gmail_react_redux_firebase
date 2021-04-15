import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import './Header.css';

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<IconButton>
					<MenuIcon />
				</IconButton>

				<img
                    className='gmail__logo'
					src='https://cdn.freelogovectors.net/wp-content/uploads/2018/04/gmail-logo.png'
					alt=''
				/>
			</div>
			<div className='header__middle'></div>
			<div className='header__right'></div>
		</div>
	);
}

export default Header;
