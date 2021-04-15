import React from 'react'

function SidebarOption({Icon,title,number}) {
    return (
        <div className='sidebarOption' >
            <Icon />{title}{number}
        </div>
    )
}

export default SidebarOption
