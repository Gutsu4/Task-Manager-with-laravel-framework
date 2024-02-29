// resources/js/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/page/Login';
import AddTask from './components/page/AddTask';
import EditTask from './components/page/EditTask';
import Home from './components/page/Home';
import TaskDetail from './components/page/TaskDetail';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/taskDetail" element={<TaskDetail />} />
          <Route path="/editTask" element={<EditTask />} />
        </Routes>
      </Router>
    );
  };

export default App;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
