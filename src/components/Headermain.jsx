import React, { Component } from 'react'

export default class Headermain extends Component {
    render() {
        return (
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
            <li><a href="index.html">Home</a></li>
            <li><a href="fake_url">Profile</a></li>
            <li><a href="fake_url">About</a></li>
            <li><a href="fake_url">Username</a></li>
            <li><a href="fake_url"><span>Log out</span></a></li>
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
