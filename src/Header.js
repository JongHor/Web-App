import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
  <div className="container">
    <div className="col-md-12">
      <h1 className="margin-bottom-15">JONG-HOR</h1>
      <form className="form-horizontal templatemo-container templatemo-login-form-1 margin-bottom-30" role="form" action="#" method="post">				
        <div className="form-group">
          <div className="col-xs-12">		            
            <div className="control-wrapper">
              <label htmlFor="username" className="control-label fa-label"><i className="fa fa-user fa-medium" /></label>
              <input type="text" className="form-control" id="username" placeholder="Username" />
            </div>		            	            
          </div>              
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <div className="control-wrapper">
              <label htmlFor="password" className="control-label fa-label"><i className="fa fa-lock fa-medium" /></label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="form-group">
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <div className="control-wrapper">
              <input type="submit" defaultValue="Log in" className="btn btn-info" />
            </div>
          </div>
        </div>
        <hr />
      </form>
      <div className="text-center">
        <a href="create-account.html" className="templatemo-create-new">Create new account <i className="fa fa-arrow-circle-o-right" /></a>	
      </div>
    </div>
  </div>
</div>

        )
    }
}
