import { Button ,IconButton} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Inbox';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import StarIcon from '@material-ui/icons/Star';
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';


function Sidebar() {
	return (
		<div className='sidebar'>
			<Button className='sidebar__compose' startIcon={<AddIcon />}>
				<h3>Compose</h3>
			</Button>

			<SidebarOption
				Icon={InboxIcon}
				title='Inbox'
				number={54}
				selected={true}
			/>
			<SidebarOption Icon={StarIcon} title='Starred' number={54} />
			<SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={54} />
			<SidebarOption Icon={LabelImportantIcon} title='Important' number={54} />
			<SidebarOption Icon={NearMeIcon} title='Sent' number={54} />
			<SidebarOption Icon={NoteIcon} title='Drafts' number={54} />
			<SidebarOption Icon={ExpandMoreIcon} title='More' number={54} />

			<div className="sidebar__footer">
			<div className="sidebar__footerIcons">
				<IconButton>
					<PersonIcon/>
				</IconButton>
				<IconButton>
					<DuoIcon/>
				</IconButton>
				<IconButton>
					<PhoneIcon/>
				</IconButton>
			</div>
		</div>

		</div>

		


	);
}

export default Sidebar;
