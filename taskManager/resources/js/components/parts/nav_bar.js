import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/Home'>Home</Link>
                </li>
                <li>
                    <Link to='/AddTask'>AddTask</Link>
                </li>
                <li>
                    <Link to='/TaskDetail'>TaskDetail</Link>
                </li>
                <li>
                    <Link to='/EditTask'>EditTask</Link>
                </li>
                <li>
                    <Link to='/TaskList'>TaskList</Link>
                </li>
            </ul>
        </nav>
    );
};

/*
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddTask" element={<AddTask />} />
          <Route path="/TaskDetail" element={<TaskDetail />} />
          <Route path="/EditTask" element={<EditTask />} />
          <Route path="/TaskList" element={<TaskList />} />
*/

export default NavBar;
