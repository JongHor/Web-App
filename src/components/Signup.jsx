import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Login from './Login'

export default class Signup extends Component {
  constructor(props){
    super(props)

    this.state ={
        firstname:'',
        lastname:'',
        gender:'',
        username:'',
        email: '',
        password:'',
        confirmpassword:'',
        success:false
    }
}

onChange = e => {
  const { name, value } = e.target
  this.setState({
      [name]: value
  })
} 

  onSubmit = e => {
    e.preventDefault()
    const { firstname,lastname,gender,username,email,password,confirmpassword } = this.state
    if(password==confirmpassword){
    const user = {
      "firstname":firstname
      ,"lastname":lastname
      ,"gender":gender
      ,"username":username,
        "email":email,
        "password":password
      };
    const url = 'https://jonghor.herokuapp.com/api/v3/users/signup'
    axios.post(url,user) .then(res => {
        localStorage.setItem('token',res.data.token)
        this.setState({success:true})
      })
    }
} 
    render() {
      if(this.state.success){
        return (
          <Login/>
      ) 
      }
        return (
          <div className="section">
  <h1 className="margin-bottom-15">Create Account</h1>
  <div className="container">
    <div className="col-md-12">			
      <form className="form-horizontal templatemo-create-account templatemo-container" role="form" onSubmit={this.onSubmit}>
        <div className="form-inner">
          <div className="form-group">
            <div className="col-md-6">		          	
              <label htmlFor="first_name" className="control-label">First Name</label>
              <input type="text" className="form-control"  onChange={this.onChange} name="firstname" id="first_name" placeholder />		            		            		            
            </div>  
            <div className="col-md-6">		          	
              <label htmlFor="last_name" className="control-label">Last Name</label>
              <input type="text" className="form-control"  onChange={this.onChange} name="lastname" id="last_name" placeholder />		            		            		            
            </div>             
          </div>
          <div className="form-group">
            <div className="col-md-12">		          	
              <label htmlFor="username" className="control-label">Email</label>
              <input type="email" className="form-control"  onChange={this.onChange} name="email" id="email" placeholder />		            		            		            
            </div>              
          </div>			
          <div className="form-group">
            <div className="col-md-6">		          	
              <label htmlFor="username" className="control-label">Username</label>
              <input type="text" className="form-control"  onChange={this.onChange} name="username" id="username" placeholder />		            		            		            
            </div>
            <div className="col-md-6 templatemo-radio-group">
              <label className="radio-inline">
                <input type="radio" name="optionsRadios"  onChange={this.onChange} name="gender"   id="optionsRadios1" defaultValue="male" /> Male
              </label>
              <label className="radio-inline">
                <input type="radio" name="optionsRadios"  onChange={this.onChange} name="gender"   id="optionsRadios2" defaultValue="female" /> Female
              </label>
            </div>             
          </div>
          <div className="form-group">
            <div className="col-md-6">
              <label htmlFor="password" className="control-label">Password</label>
              <input type="password" className="form-control" onChange={this.onChange} name="password" id="password" placeholder />
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="control-label">Confirm Password</label>
              <input type="password" className="form-control" onChange={this.onChange} name="confirmpassword" id="password_confirm" placeholder />
            </div>
          </div>
          
          <div className="form-group">
            <div className="col-md-12">
              <input type="submit" defaultValue="Create account" className="btn btn-info" />
              <a href="/" className="pull-right">Login</a>
            </div>
          </div>	
        </div>				    	
      </form>		      
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="templatemo_modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          <h4 className="modal-title" id="myModalLabel">Terms of Service</h4>
        </div>
        <div className="modal-body">
          <p>This form is provided by <a rel="nofollow" href="http://www.templatemo.com/page/1">Free HTML5 Templates</a> that can be used for your websites. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}