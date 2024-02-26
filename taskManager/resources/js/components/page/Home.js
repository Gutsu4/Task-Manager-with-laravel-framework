import React from 'react';
import NavBar from '../parts/nav_bar';
import TaskList from '../parts/taskList';

const Home = () => {
    document.title = 'Home';
    return (
        <div>
            <NavBar />
            <TaskList />
        </div>
    );
};

export default Home;
