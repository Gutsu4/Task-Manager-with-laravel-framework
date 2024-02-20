import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/addTask'>AddTask</Link>
                </li>
                <li>
                    <Link to='/taskDetail'>TaskDetail</Link>
                </li>
                <li>
                    <Link to='/editTask'>EditTask</Link>
                </li>
                <li>
                    <Link to='/TaskList'>TaskList</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
