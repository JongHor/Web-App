import React from 'react'
import { Link } from 'react-router-dom';
import About from './About'
import Profile from './Profile'
import Column from './Column'
import Rooms from './Rooms.jsx'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


function Headermain(props){
         var toShow = props.username;
        if(props.username.length>8){
          toShow = props.username.substring(0,10)+"...";
        }
        return (
          <Router>
           <div className="parallax">
  <div className="header" id="top">
    <nav className="navbar navbar-inverse" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="fake_url" className="navbar-brand scroll-top"><img src="images/logo.png" alt="Layer" />JONG - HOR</a>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
        {/*/.navbar-header*/}
        <div id="main-nav" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/home"><a >Home</a></Link></li>
            <li> <Link to="/profile"><a >Profile</a></Link> </li>
            <li> <Link to="/about"><a >About</a></Link></li>
            <li><a > {toShow}</a></li>
            <li><a onClick={props.logout}><span>Log out</span></a></li>
          </ul>
        </div>
        {/*/.navbar-collapse*/}
      </div>
      {/*/.container*/}
    </nav>
    {/*/.navbar*/}
  </div>
      <Route path="/about"><About /></Route>
      <Route path="/profile"  component={Profile}></Route>
      <Route path="/home"  component={Column}></Route>
      <Route path="/select" component={Rooms}></Route>
      </div>
    </Router>
        )
}
export default Headermain
