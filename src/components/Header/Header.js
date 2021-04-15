import { IconButton ,Avatar} from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
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
			<div className='header__middle'>
				<SearchIcon />
				<input type='text' placeholder='Search mail' />
				<ArrowDropDown className='header__inputCaret' />
			</div>
			<div className='header__right'>
				<IconButton>
					<AppsIcon />
				</IconButton>

                <IconButton>
					<NotificationsIcon />
				</IconButton>

                <Avatar />

			</div>
		</div>
	);
}

export default Header;
