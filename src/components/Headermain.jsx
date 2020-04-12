import React ,{Component} from 'react'
import { Link } from 'react-router-dom';
import About from './About'
import Profile from './Profile'
import Column from './Column'
import Rooms from './Rooms'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios'


class Headermain extends Component{
    constructor(props){
      super(props)
      this.state={
        select:false,
        currentUser:null,
        book:'',
        hor:'',
        show:false,
        refresh:false,
        booked:false
      }
    } 
    //// fetch
    async fetch_book(){
      const exist = localStorage.getItem('token')
      const url = `https://jonghor.herokuapp.com/api/v3/book/${this.state.currentUser._id}`
      const head = {
          headers: {
              'Authorization': `Bearer ${exist}`
            }
        };
       axios.get(url,head)
        .then(res => {
          this.setState({book:res.data[0],show:true})  
          this.resetRefresh()
      })
  }
  async fetchs(){
      const exist = localStorage.getItem('token')
      const url = 'https://jonghor.herokuapp.com/api/v3/hor'
      const head = {
          headers: {
              'Authorization': `Bearer ${exist}`
            }
        };
       axios.get(url,head)
        .then( res => {
           this.setState({hor:res.data})
           this.fetch_book()
      })
}

   async fetch_user(){
      const exist = localStorage.getItem('token')
        const url = 'https://jonghor.herokuapp.com/api/v3/users/me'
        axios.get(url,{
            headers: {
              'Authorization': `Bearer ${exist}`
            }
          })
          .then(async res => {
            await this.setState({currentUser:res.data.user,booked:res.data.user.booked})
            this.fetchs()
        })
  }
  ////
  setBooked=()=>{
    this.setState({booked:false})
  }
///
  setRefresh=()=>{
    this.setState({refresh:true})
  }
  resetRefresh=()=>{
    this.setState({refresh:false})
  }
////
  //
     componentDidMount(){ // start webpage
      this.fetch_user()
  }
  /// 
  ///
    selectHor = () =>{
      this.setState({select:true})
    }
    initHor = () =>{
      this.setState({select:false})
    }
    ////
    render(){
      if(this.state.refresh){
        this.fetch_user()
        return null
      }
      if(!this.state.show){
        return null;
      }
         var toShow = this.props.username;
        if(this.props.username.length>8){
          toShow = this.props.username.substring(0,10)+"...";
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
          <Link to="/home" onClick={ this.initHor} ><a  className="navbar-brand scroll-top"><img src="images/logo.png" alt="Layer" />JONG - HOR</a></Link> 
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
        {/*/.navbar-header*/}
        <div id="main-nav" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/home" onClick={ this.initHor} ><a >Home</a></Link></li>
            <li> <Link to="/profile"><a >Profile</a></Link> </li>
            <li> <Link to="/about"><a >About</a></Link></li>
            <li><a > {toShow}</a></li>
            <li><a onClick={this.props.logout}><span>Log out</span></a></li>
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
      <Route  path="/home" render={ props => (
          <div>
            <Column changHor={this.selectHor} init={this.initHor} select={this.state.select} currentUser={this.state.currentUser} booked={this.state.booked} book={this.state.book}  hor={this.state.hor} refresh={this.setRefresh} setBooked={this.setBooked}></Column>
          </div>
        )} />
      <Route path="/select" component={Rooms}></Route>
      </div>
    </Router>
        )
}
}
export default Headermain
