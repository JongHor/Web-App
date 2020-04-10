import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link ,Redirect} from 'react-router-dom';
import Rooms from './Rooms.jsx'
export default class Column extends Component {
  constructor(props){
    super(props)

    this.state ={
        selected:false 
    }


  }
  selectHor = () =>{
    this.setState({selected:true})
  }
    render() {
      const room=[
        {
            "booked": false,
            "_id": "5e8df00b6bee82443cc615c5",
            "room": 201
        },
        {
            "booked": false,
            "_id": "5e8df00b6bee82443cc615c6",
            "room": 202
        },
        {
            "booked": false,
            "_id": "5e8df00b6bee82443cc615c7",
            "room": 203
        },
        {
            "booked": false,
            "_id": "5e8df00b6bee82443cc615c8",
            "room": 204
        },
        {
            "booked": false,
            "_id": "5e8df00b6bee82443cc615c9",
            "room": 205
        },
        {
            "booked": false,
            "_id": "5e8df00b6bee82443cc615ca",
            "room": 206
        }
    ]    
    if(this.state.selected){
      // this.setState({selected:false})
      return (
        <Router>
           < Redirect to='/select' />
          <div>
        <Route exact path="/select" render={ props => (
          <div>
          <Rooms 
              rooms={room} 
               />
          </div>
        )} />
</div>
</Router>
      )
    }
        return (
           <div className="parallax">
  <div className="bg__title templatemo-position-relative">
    <div className="container">
      <div className="templatemo-flexbox">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="left-image wow animated fadeInLeft">
              <img src="images/lookchanglogo.png" alt="creative writing" className="img-responsive" />
            </div>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-12">              
            <div className="right-caption wow animated fadeInRight">
              <br/>
              <br/>
              <b><h2><span className="black">JONG - HOR (จอง - หอ)</span></h2></b><br/>
              <b><h2><span className="purple">สอบติด มช. เเล้ว! อยู่หอในที่ไหนดี?</span></h2></b><br/><br/>
              <h4><span className="red">เว็บไซต์ JONG - HOR สร้างขึ้นมาเพื่อช่วยน้องๆลูกช้างเชือกใหม่ในการประกอบการตัดสินใจเเละเลือกหอในที่ต้องการ</span></h4>
            </div>
          </div>
        </div>            
      </div>          
    </div>
    <div className="arrow text-center">
      <a href="fake_url" className="scroll-link btn btn-dark" data-id="second-section"><i className="fa fa-angle-down" /></a>
    </div>
  </div>
  <div id="second-section"> 
  <div className="bg__first">
    <div id="fourth-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-8 col-sm-6 col-xs-10 col-xs-offset-1 wow animated fadeInLeft">
            <div className="left-text">
              <h2>.04 Section Four Title</h2>
              <div className="line" />
              <p>Donec suscipit hendrerit euismod. Ut at nisl sem. Praesent ac efficitur mi. Sed fermentum iaculis accumsan. Mauris rutrum dignissim eros id finibus sed turpis in diam mollis lobortis. <br /><br />Phasellus tincidunt leo ante, quis convallis lectus pretium vel. Ut blandit, est eget feugiat laoreet, magna nisi volutpat ligula, commodo efficitur metus magna vel sapien.</p>                  
              <div className="button">
                <a onClick={this.selectHor}>Read More</a>
              </div>                  
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="fourth-arrow">
            <a href="fake_url" className="scroll-link btn btn-dark" data-id="fifth-section"><i className="fa fa-angle-down" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div className="bg__second">
    <div id="third-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-10 wow animated fadeInLeft">
            <div className="left-text">
              <h2>.03 Section Three Title</h2>
              <div className="line" />
              <p>Please tell your friends about <span className="blue">template</span><span className="green">mo</span>.com website. Ut at nisl sem. Praesent ac efficitur mi. Sed fermentum iaculis accumsan. Mauris rutrum dignissim eros id finibus sed turpis in diam mollis lobortis. <br /><br />Phasellus tincidunt leo ante, quis convallis lectus pretium vel. Ut blandit, est eget feugiat laoreet, magna nisi volutpat ligula, commodo efficitur metus magna vel sapien.</p>
              <div className="button">
                <a >Read More</a>
              </div>                  
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 templatemo-position-relative">
            <div className="fourth-arrow">
              <a href="fake_url" className="scroll-link btn btn-dark" data-id="fourth-section"><i className="fa fa-angle-down" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg__third">
    <div id="fourth-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-8 col-sm-6 col-xs-10 col-xs-offset-1 wow animated fadeInLeft">
            <div className="left-text">
              <h2>.04 Section Four Title</h2>
              <div className="line" />
              <p>Donec suscipit hendrerit euismod. Ut at nisl sem. Praesent ac efficitur mi. Sed fermentum iaculis accumsan. Mauris rutrum dignissim eros id finibus sed turpis in diam mollis lobortis. <br /><br />Phasellus tincidunt leo ante, quis convallis lectus pretium vel. Ut blandit, est eget feugiat laoreet, magna nisi volutpat ligula, commodo efficitur metus magna vel sapien.</p>                  
              <div className="button">
                <a >Read More</a>
              </div>                  
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="fourth-arrow">
            <a href="fake_url" className="scroll-link btn btn-dark" data-id="fifth-section"><i className="fa fa-angle-down" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg__fourth">
    <div id="third-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-10 wow animated fadeInLeft">
            <div className="left-text">
              <h2>.03 Section Three Title</h2>
              <div className="line" />
              <p>Please tell your friends about <span className="blue">template</span><span className="green">mo</span>.com website. Ut at nisl sem. Praesent ac efficitur mi. Sed fermentum iaculis accumsan. Mauris rutrum dignissim eros id finibus sed turpis in diam mollis lobortis. <br /><br />Phasellus tincidunt leo ante, quis convallis lectus pretium vel. Ut blandit, est eget feugiat laoreet, magna nisi volutpat ligula, commodo efficitur metus magna vel sapien.</p>
              <div className="button">
                <a >Read More</a>
              </div>                  
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 templatemo-position-relative">
            <div className="fourth-arrow">
              <a href="fake_url" className="scroll-link btn btn-dark" data-id="fourth-section"><i className="fa fa-angle-down" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg__fifth">
    <div id="fourth-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-8 col-sm-6 col-xs-10 col-xs-offset-1 wow animated fadeInLeft">
            <div className="left-text">
              <h2>.04 Section Four Title</h2>
              <div className="line" />
              <p>Donec suscipit hendrerit euismod. Ut at nisl sem. Praesent ac efficitur mi. Sed fermentum iaculis accumsan. Mauris rutrum dignissim eros id finibus sed turpis in diam mollis lobortis. <br /><br />Phasellus tincidunt leo ante, quis convallis lectus pretium vel. Ut blandit, est eget feugiat laoreet, magna nisi volutpat ligula, commodo efficitur metus magna vel sapien.</p>                  
              <div className="button">
                <a >Read More</a>
              </div>                  
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="fourth-arrow">
            <a href="fake_url" className="scroll-link btn btn-dark" data-id="fifth-section"><i className="fa fa-angle-down" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg__sixth">
    <div id="third-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-10 wow animated fadeInLeft">
            <div className="left-text">
              <h2>.03 Section Three Title</h2>
              <div className="line" />
              <p>Please tell your friends about <span className="blue">template</span><span className="green">mo</span>.com website. Ut at nisl sem. Praesent ac efficitur mi. Sed fermentum iaculis accumsan. Mauris rutrum dignissim eros id finibus sed turpis in diam mollis lobortis. <br /><br />Phasellus tincidunt leo ante, quis convallis lectus pretium vel. Ut blandit, est eget feugiat laoreet, magna nisi volutpat ligula, commodo efficitur metus magna vel sapien.</p>
              <div className="button">
                <a >Read More</a>
              </div>                  
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 templatemo-position-relative">
            <div className="fourth-arrow">
              <a href="fake_url" className="scroll-link btn btn-dark" data-id="fourth-section"><i className="fa fa-angle-down" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
        )
    }
}
