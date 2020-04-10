import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <div>
     <Router>
       <div >
         <Route path="/" component={Login} /> 
         <Route path="/signup" component={Signup} />      
       </div>
       </Router>
    </div>
  );
}

export default App;
