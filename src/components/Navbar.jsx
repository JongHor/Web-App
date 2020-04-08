import React from 'react'
import { Link } from 'react-router-dom';
 
function Navbar(props) {
   return (
       <nav className="navbar" role="navigation" aria-label="main navigation">
           <div className="navbar-brand">
               <a className="navbar-item" href="/">
                   JongHor
               </a>
           </div>
           <div id="navbarBasicExample" className="navbar-menu">
               <div className="navbar-start">
                   <div className="navbar-item">
                    <Link to="/about">
                        About
                    </Link>
                   </div>
               </div>
               <div className="navbar-end">
                   <div className="navbar-item">
                       <div className="buttons">
                           <h3 className="navbar-item">
                               {props.username}
                           </h3>
                           <button className="button is-light" onClick={props.logout}>
                               Logout
                           </button>
                       </div>
                   </div>
               </div>
           </div>
       </nav>
 
   )
}
 
export default Navbar
