import React, { Component } from 'react'
import axios from 'axios';

export default class Profile extends Component {
  constructor(props){
    super(props)

    this.state ={
      id:'',
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password:''
    }
}
componentDidMount(){ // start webpage
  const exist = localStorage.getItem('token')
  if(exist!=null){
      const url = 'https://jonghor.herokuapp.com/api/v3/users/me'
      axios.get(url,{
          headers: {
            'Authorization': `Bearer ${exist}`
          }
        })
        .then(res => {
          this.setState({ firstname: res.data.user.firstname,
          lastname:  res.data.user.lastname,
          username:  res.data.user.username,
          email:  res.data.user.email,
          password: res.data.user.password,
          id:res.data.user._id
        })
      })
  }
}
  onChange = e => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
} 

onSubmit = async e => {
    e.preventDefault()
    const exist = localStorage.getItem('token')
    if(exist!=null){
      const url = `https://jonghor.herokuapp.com/api/v3/users/edit/${this.state.id}`
      const data = {
        "firstname": this.state.firstname,
        "lastname": this.state.lastname,
        "username": this.state.username,
        "email": this.state.email,
        "password":this.state.password
      }
      await axios.put(url,data,{
          headers: {
            'Authorization': `Bearer ${exist}`
          }
        })
        .then(res => {
          window.location.reload(false)
        }).catch(error=>{
          alert(error)
        })
      }
  }

    render() {
        return (
          <div className="parallax">
  <div className="well">
    
    <ul className="nav nav-tabs">
      <li className="active"><a href="#home" data-toggle="tab">Profile</a></li>
      
    </ul>
    <div id="myTabContent" className="tab-content">
      <div className="tab-pane active in" id="home">
        <form id="tab" onSubmit={this.onSubmit}>
          <br />
          <br />
          <label>Username</label>
          <br />
          <br />
          <input type="text" onChange={this.onChange} name="username" className="input-xlarge" value={this.state.username} />
          <br />
          <br />
          <label>First Name</label>
          <br />
          <br />
          <input type="text"  onChange={this.onChange} name="firstname" className="input-xlarge" value={this.state.firstname} />
          <br />
          <br />
          <label>Last Name</label>
          <br />
          <br />
          <input type="text"  onChange={this.onChange} name="lastname" className="input-xlarge" value={this.state.lastname} />
          <br />
          <br />
          <label>Email</label>
          <br />
          <br />
          <input type="text"  onChange={this.onChange} name="email"className="input-xlarge" value={this.state.email} />
          <br />
          <br />
          <label>Password</label>
          <br />
          <br />
          <input type="password"  onChange={this.onChange} name="password"className="input-xlarge"  />
          <br />
          <br />
          <div>
          <input type="submit" defaultValue="Create account" className="btn btn-info" />
              <a  className="pull-right">Update</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

        )
    }
}
