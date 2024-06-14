import React from "react";
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

const NavBar = () => {
    return  (
        <nav className="NavBar">
            <ul className="NavBar-ul">
                <li className="NavBar-li">
                    <Link className="NavLinkItem" to="/">Home</Link>
                </li>
                <li className="NavBar-li">
                    <Link className="NavLinkItem" to="/jobs">Jobs</Link>
                </li>
                <li className="NavBar-li">
                    <Link className="NavLinkItem" to="/companies">Companies</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;