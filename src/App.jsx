import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login'
import About from './components/About'
import Headermain from './components/Headermain';
import Footermain from './components/Footermain';
import Column from './components/Column';
import Profile from './components/Profile';

function App() {
  return (
    <div>
     <Router>
       <div >
         <Route path="/" component={Login} /> 
         <Route path="/profile" component={Profile} />
         <Route path="/about" component={About} />        
       </div>
       </Router>
    </div>
  );
}

export default App;
