import React from 'react'

function NavItem(props) {
    return (
        <>

            {/* <!-- Nav Item --> */}
            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id={`${props.id}Dropdown`} >
                    <i className={`fas fa-${props.icon} fa-fw`}></i>
                    {/* <!-- Counter --> */}
                    <span className="badge badge-danger badge-counter">{props.alert}</span>
                </a>
            </li>
        </>
    )

}

export default NavItem