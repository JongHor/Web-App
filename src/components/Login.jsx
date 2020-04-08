import React from 'react'
import 'bulma/css/bulma.css'
import Navbar from './Navbar'
import MessageList from './MessageList'
import axios from 'axios';
import Signup from './Signup'
class Login extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            email: '',
            password:'',
            message:'',
            messages:[],
            currentUser: null,
            image:'',
            comment:'',
            signup: false
        }

        this.logout=this.logout.bind(this)
    }

    componentDidMount(){ // start webpage
        const exist = localStorage.getItem('token')
        if(exist!=null){
            const url = 'http://localhost:3030/api/v3/users/me'
            axios.get(url,{
                headers: {
                  'Authorization': `Bearer ${exist}`
                }
              })
              .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({currentUser:res.data.user})
            })
        }
    }


    post = e =>{
      
    }

    delete = e =>{
      
    }

    onChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    } 

    onSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state
        console.log(email+" "+password)
        const user = {
            "email":email,
            "password":password
          };
        const url = 'http://localhost:3030/api/v3/users/login'
        axios.post(url,user) .then(res => {
            console.log(res);
            console.log(res.data);
            localStorage.setItem('token',res.data.token)
            this.componentDidMount()
          })
    } 

    logout(){
        const exist = localStorage.getItem('token')
        const url = 'http://localhost:3030/api/v3/users/logout'
        const head = {
            headers: {
                'Authorization': `Bearer ${exist}`
              }
          };
        axios.get(url,head)
          .then(res => {
            console.log(res);
            console.log(res.data);
            localStorage.clear();
            this.setState({currentUser:null})
        })
    }
    createNew = () =>{
      this.setState({signup:true})
    }
    render(){
        const {message,currentUser} =this.state
        if(this.state.signup){
           return (
               <div>
                <Signup />
               </div>
           ) 
        }
        if (currentUser){
            return (
                <div>
                <Navbar logout={this.logout} username={currentUser.username}></Navbar>
                <MessageList
                       image={this.state.image}
                       messages={this.state.messages}
                       onChange={this.onChange}
                       post={this.post}
                       delete={this.delete} />
                </div> 
            )
        }
        return (
          <div className="section">
  <div className="container">
    <div className="col-md-12">
      <h1 className="margin-bottom-15">JONG-HOR</h1>
      <form className="form-horizontal templatemo-container templatemo-login-form-1 margin-bottom-30" role="form" onSubmit={this.onSubmit}>				
        <div className="form-group">
          <div className="col-xs-12">		            
            <div className="control-wrapper">
              <label htmlFor="username" className="control-label fa-label"><i className="fa fa-user fa-medium" /></label>
              <input type="text" onChange={this.onChange} name="email" className="form-control" id="username" placeholder="Username" />
            </div>		            	            
          </div>              
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <div className="control-wrapper">
              <label htmlFor="password" className="control-label fa-label"><i className="fa fa-lock fa-medium" /></label>
              <input type="password" onChange={this.onChange} className="form-control" name="password" id="password" placeholder="Password" />
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
      <div className="text-center" >
        <a onClick={this.createNew} className="templatemo-create-new">Create new account <i className="fa fa-arrow-circle-o-right" /></a>	
      </div>
    </div>
  </div>
</div>

        )
    }
}

export default Login