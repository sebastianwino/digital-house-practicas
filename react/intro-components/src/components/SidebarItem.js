import React from 'react'

function SidebarItem(props) {
    return (
        <>
            <li className="nav-item">
				<a className={`nav-link ${props.link}`} href="/">
					<i className={`fas fa-fw fa-${props.icon}`}></i>
                    <span>{props.name}</span>
				</a>
			</li>
        </>
    )

}

export default SidebarItem