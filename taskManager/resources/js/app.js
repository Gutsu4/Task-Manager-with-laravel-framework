// resources/js/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import ExampleComponent from './components/ExampleComponent';

if (document.getElementById('example')) {
  ReactDOM.render(<ExampleComponent />, document.getElementById('example'));
}
