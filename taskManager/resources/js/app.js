// resources/js/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/page/Login';
import AddTask from './components/page/AddTask';
import EditTask from './components/page/EditTask';
import Home from './components/page/Home';
import TaskDetail from './components/page/TaskDetail';
import TaskList from './components/page/TaskList';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddTask" element={<AddTask />} />
          <Route path="/TaskDetail" element={<TaskDetail />} />
          <Route path="/EditTask" element={<EditTask />} />
          <Route path="/TaskList" element={<TaskList />} />
        </Routes>
      </Router>
    );
  };

export default App;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
