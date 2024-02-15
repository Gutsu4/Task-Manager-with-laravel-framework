// resources/js/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './components/page/Login';


const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
  };

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
