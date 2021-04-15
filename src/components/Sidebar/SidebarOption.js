import React from 'react';
import './SidebarOption.css';

function SidebarOption({ Icon, title, number }) {
	return (
		<div className='sidebarOption'>
			<div className='inbox-icon'>
				<Icon />
			</div>

			<h3>{title}</h3>
			<p>{number}</p>
		</div>
	);
}

export default SidebarOption;
