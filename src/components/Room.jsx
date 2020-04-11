import React, { Component } from 'react'
import axios from 'axios';
import { Redirect, BrowserRouter as Router } from 'react-router-dom';
export default class Room extends Component {
  constructor(props){
    super(props)
    this.state ={
        bookingSucc:false,
    }
}
 
  updating(){
    const exist = localStorage.getItem('token')
        if(exist!=null){
          const temp = this.props.hor.stairs[0].rooms
          temp[this.props.index].booked=true
          const url = `https://jonghor.herokuapp.com/api/v3/hor/${this.props.hor._id}`
            axios.put(url,{
              "name": this.props.hor.name,
              "gender": this.props.hor.gender,
              "stairs": [
                  {
                      "rooms":temp,
                      "stair":this.props.hor.stairs[0].stair
                  }
              ]
            },{
                headers: {
                  'Authorization': `Bearer ${exist}`
                }
              })
              .then(res => {
                this.onSubmit()
            })
        }
  }
  
    onSubmit = async e => {
      const exist = localStorage.getItem('token')
      if(exist!=null){
        const url = `https://jonghor.herokuapp.com/api/v3/users/book/${this.props.currentUser._id}`
        const data = {
          "booked":true,
        }
        await axios.put(url,data,{
            headers: {
              'Authorization': `Bearer ${exist}`
            }
          })
          .then(res => {
            this.setState({bookingSucc:true})
            this.props.changHor()
            this.bookadd()
            this.props.refresh()
          })
        }
    }  

    async bookadd(){
      const exist = localStorage.getItem('token')
      if(exist!=null){
        const url = "https://jonghor.herokuapp.com/api/v3/book"
        const data =  {
           "horId":this.props.roomindex,
           "roomId":this.props.index,
           "roomNum":this.props.room.room,
            "horName":this.props.hor.name
        }
        await axios.post(url,data,{
            headers: {
              'Authorization': `Bearer ${exist}`
            }
          })
          .then(res => {
            this.props.refresh()
          })
        }
    }

  booking(){
    this.updating()
  }

  render() {
      const name = this.props.room.room
      if(this.state.bookingSucc){
        return(
          <Router>
          <Redirect to='/home'/> 
          </Router>
        )
      }
    return (  
        <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="info-box">
          &nbsp;&nbsp;&nbsp;&nbsp;<div className="info-box-content">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="info-box-text">{name}</span>
            <button  disabled={this.props.room.booked} onClick={()=>this.booking()}><span className="info-box-icon bg-aqua">select</span></button>
          </div>
        </div>
      </div>

      // <tr>
      //   <td>Transaction Name</td>
      //   <td>-500</td>
      //   <td>expense</td>
      //   <td>2 Mar 2020</td>
      // </tr>
    )
  }
}
