import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
  <div className="well">
    
    <ul className="nav nav-tabs">
      <li className="active"><a href="#home" data-toggle="tab">Profile</a></li>
      <li><a href="#profile" data-toggle="tab">Password</a></li>
    </ul>
    <div id="myTabContent" className="tab-content">
      <div className="tab-pane active in" id="home">
        <form id="tab">
          <br />
          <br />
          <label>Username</label>
          <br />
          <br />
          <input type="text" className="input-xlarge" />
          <br />
          <br />
          <label>First Name</label>
          <br />
          <br />
          <input type="text" className="input-xlarge" />
          <br />
          <br />
          <label>Last Name</label>
          <br />
          <br />
          <input type="text" className="input-xlarge" />
          <br />
          <br />
          <label>Email</label>
          <br />
          <br />
          <input type="text" className="input-xlarge" />
          <br />
          <br />
          <label>Address</label>
          <br />
          <br />
          <textarea  rows={3} className="input-xlarge"/>
          <br />
          <br />
          <div>
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
      <div className="tab-pane fade" id="profile">
        <form id="tab2">
        <br />
          <label>New Password</label>
          <br />
          <br />
          <input type="password" className="input-xlarge" />
          <div>
          <br />
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

        )
    }
}
