import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login'
import About from './components/About'

function App() {
  return (
    <Router>
      <div className="container mt-4 mb-5">
        <Route path="/" component={Login} /> 
          
        <Route path="/about" component={About} />        
      </div>
      </Router>
  );
}

export default App;
