import React from 'react';
import './SidebarOption.css';

function SidebarOption({ Icon, title, number, selected }) {
	return (
		<div className={`sidebarOption ${selected && 'sidebarOption--active'}`}>
			<div className='inbox-icon'>
				<Icon />
			</div>

			<h3>{title}</h3>
			<br/>
			<br/>
			<br/>
			<p>{number}</p>
		</div>
	);
}

export default SidebarOption;
