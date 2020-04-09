import React, { Component } from 'react'

export default class Headermain extends Component {
    render() {
        return (
           <div>
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
          <a href="#" className="navbar-brand scroll-top"><img src="images/logo.png" alt="Layer Template" />Layer</a>
        </div>
        {/*/.navbar-header*/}
        <div id="main-nav" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Pages</a>
              <ul className="sub-menu">
                <li><a href="left_sidebar.html">Left Sidebar</a></li>
                <li><a href="right_sidebar.html">Right Sidebar</a></li>
                <li><a href="without_sidebar.html">Without Sidebar</a></li>
              </ul>
            </li>
            <li><a href="columns.html">Columns</a></li>
            <li><a href="#"><span>Sign Up</span></a></li>
          </ul>
        </div>
        {/*/.navbar-collapse*/}
      </div>
      {/*/.container*/}
    </nav>
    {/*/.navbar*/}
  </div>
</div>

        )
    }
}
