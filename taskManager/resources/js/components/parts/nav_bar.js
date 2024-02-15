import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/Add'>Add</Link>
                </li>
                <li>
                    <Link to='/Edit'>Edit</Link>
                </li>
                <li>
                    <Link to='/View'>View</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
