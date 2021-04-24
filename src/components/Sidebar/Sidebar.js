import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';

function Sidebar() {
	return (
		<div className='sidebar'>
			<Button className='sidebar__compose' startIcon={<AddIcon />}>
				<h3>Compose</h3>
			</Button>

			<SidebarOption Icon={InboxIcon} title='Inbox' number={54} />
		</div>
	);
}

export default Sidebar;



