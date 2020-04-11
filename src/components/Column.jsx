import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link ,Redirect} from 'react-router-dom';
import Rooms from './Rooms.jsx'
import axios from 'axios';
export default class Column extends Component {
  constructor(props){
    super(props)
    this.state={
      number:Number(0),
      hor:this.props.hor,
    }
  }
  //  componentDidMount(){
  //     this.fetchs();
  // }
async refresh(){
  await window.location.reload();
}


async cancel(){
  await this.update_user()
  await this.update_hor()
  await this.delete_book()
  await this.refresh()
}

async delete_book(){
  const exist = localStorage.getItem('token')
  if(exist!=null){
    const url = `https://jonghor.herokuapp.com/api/v3/book/${this.props.currentUser._id}`
    await axios.delete(url,{
        headers: {
          'Authorization': `Bearer ${exist}`
        }
      })
      .then(res => {
      })
    }
}

 update_user = async e => {
  const exist = localStorage.getItem('token')
  if(exist!=null){
    const url = `https://jonghor.herokuapp.com/api/v3/users/book/${this.props.currentUser._id}`
    const data = {
      "booked":false,
    }
    await axios.put(url,data,{
        headers: {
          'Authorization': `Bearer ${exist}`
        }
      })
      .then(res => {
      })
    }
}  

async update_hor(){
  const exist = localStorage.getItem('token')
        if(exist!=null){
          const temp = this.props.hor[this.props.book.horId].stairs[0].rooms
          temp[this.props.book.roomId].booked=false
          const url = `https://jonghor.herokuapp.com/api/v3/hor/${this.props.hor[this.props.book.horId]._id}`
            await axios.put(url,{
              "name": this.props.hor[this.props.book.horId].name,
              "gender": this.props.hor[this.props.book.horId].gender,
              "stairs": [
                  {
                      "rooms":temp,
                      "stair":this.props.hor[this.props.book.horId].stairs[0].stair
                  }
              ]
            },{
                headers: {
                  'Authorization': `Bearer ${exist}`
                }
              })
              .then(res => {
            })
        }
}

  checkcondition=num=>{
    if(this.props.currentUser.booked|(this.props.currentUser.gender!==this.props.hor[num].gender)){
      alert("คุณได้จองหอแล้ว")
      return false
      
    } else{
      this.choose(num)
    }
  }

  choose=num=>{
    this.setState({number:num})
    this.props.changHor();
  }

    render() {
    if(this.props.select){
      return (
        <Router>
           < Redirect to='/select' />
          <div>
        <Route exact path="/select" render={ props => (
          <div>
          <Rooms 
              changHor={this.props.init}
              rooms={this.props.hor[this.state.number]} 
              currentUser={this.props.currentUser}
              index={this.state.number}
              refresh={this.refresh}
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
              {this.props.booked && (
                <div>
                  <br/>
              <h4><span className="blue">ตอนนี้คุณได้จองหอแล้ว { this.props.book.horName  } {this.props.book.roomNum}</span></h4>
                   <div className="button" >
            <a onClick={()=>this.cancel()}>Cancel</a>
          </div>   
                </div>
          )}
            </div>
          </div>
        </div>            
      </div>          
    </div>
    <div className="arrow text-center">
      <a className="scroll-link btn btn-dark" data-id="second-section"><i className="fa fa-angle-down" /></a>
    </div>
  </div>
  <div id="second-section"> 
  <div className="bg__first">
    <div id="fourth-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-8 col-sm-6 col-xs-10 col-xs-offset-1 wow animated fadeInLeft">
            <div className="left-text">
            <h2>หอ 3 ชาย (ปรับปรุงใหม่)</h2>
              <div className="line" />
              <b><p>ราคาห้องพัก (ต่อ 1 คน)</p></b>
              <p>- ค่าห้องพักรวม 10,850 บาท *ชำระก่อนเข้าพัก</p>
              <b><p>ร้านค้าบริเวณหอพัก</p></b>
              <p>- มินิมาร์ท , ร้านถ่ายเอกสาร , ร้านชานมไข่มุก</p>
              <b><p>อื่นๆ</p></b>
              <p>- โรงจอดรถ (เป็นลานจอดรถแบบไม่มีหลังคา)</p>
              <p>- ห้องคาราโอเกะ</p>
              <p>- ร้านซักอบรีด</p>
              <p>- เครื่องซักผ้าหยอดเหรียญ</p>
              <p>- โรงอาหาร</p>
              <p>- เครื่องถ่ายเอกสาร Double A Fast Print</p>                  
              <div className="button" >
                <a onClick={()=>this.checkcondition(0)}>Select</a>
              </div>                  
            </div>
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
            <h2>หอ 4 ชาย (ปรับปรุงใหม่)</h2>
              <div className="line" />
              <b><p>ราคาห้องพัก (ต่อ 1 คน)</p></b>
              <p>- ค่าห้องพักรวม 10,850 บาท *ชำระก่อนเข้าพัก</p>
              <b><p>ร้านค้าบริเวณหอพัก</p></b>
              <p>- 7-11 , ร้านตัดผม , ตู้ขายเครื่องดื่มอัตโนมัติ</p>
              <b><p>อื่นๆ</p></b>
              <p>- โรงจอดรถ (พื้นที่ของมหาวิทยาลัย บริเวณข้างหอพัก)</p>
              <p>- ห้องคาราโอเกะ</p>
              <p>- ร้านซักอบรีด</p>
              <p>- เครื่องซักผ้าหยอดเหรียญ</p>
              <p>- โรงอาหาร</p>
              <p>- เครื่องถ่ายเอกสาร Double A Fast Print</p>
              <div className="button" >
                <a onClick={()=>this.checkcondition(1)}>Select</a>
              </div>                  
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
            <h2>หอ 5 ชาย</h2>
              <div className="line" />
              <b><p>ราคาห้องพัก (ต่อ 1 คน)</p></b>
              <p>- ค่าห้องพักรวม 2,400 บาท *ชำระก่อนเข้าพัก</p>
              <b><p>ร้านค้าบริเวณหอพัก</p></b>
              <p>- ร้านตัดผม , ตู้ขายเครื่องดื่มอัตโนมัติ</p>
              <b><p>อื่นๆ</p></b>
              <p>- โรงจอดรถ</p>
              <p>- ร้านซักอบรีด</p>
              <p>- เครื่องซักผ้าหยอดเหรียญ</p>
              <p>- โรงอาหาร</p>
              <p>- เครื่องถ่ายเอกสาร Double A Fast Print</p>                  
              <div className="button" >
                <a onClick={()=>this.checkcondition(2)}>Select</a>
              </div>                  
            </div>
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
            <h2>หอ 4 หญิง (ปรับปรุงใหม่)</h2>
              <div className="line" />
              <b><p>ราคาห้องพัก (ต่อ 1 คน)</p></b>
              <p>- ค่าห้องพักรวม 10,850 บาท *ชำระก่อนเข้าพัก</p>
              <b><p>ร้านค้าบริเวณหอพัก</p></b>
              <p>- ร้านตัดผม , ตู้ขายเครื่องดื่มอัตโนมัติ</p>
              <b><p>อื่นๆ</p></b>
              <p>- โรงจอดรถ (เป็นลานจอดรถแบบไม่มีหลังคา)</p>
              <p>- ห้องคาราโอเกะ</p>
              <p>- ร้านซักอบรีด</p>
              <p>- เครื่องซักผ้าหยอดเหรียญ</p>
              <p>- โรงอาหาร</p>
              <p>- เครื่องถ่ายเอกสาร Double A Fast Print</p>
              <div className="button" >
                <a onClick={()=>this.checkcondition(3)}>Select</a>
              </div>                  
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
            <h2>หอ 6 หญิง (ปรับปรุงใหม่)</h2>
              <div className="line" />
              <b><p>ราคาห้องพัก (ต่อ 1 คน)</p></b>
              <p>- ค่าห้องพักรวม 10,850 บาท *ชำระก่อนเข้าพัก</p>
              <b><p>ร้านค้าบริเวณหอพัก</p></b>
              <p>- ตู้ขายเครื่องดื่มอัตโนมัติ</p>
              <b><p>อื่นๆ</p></b>
              <p>- โรงจอดรถ (เป็นลานจอดรถแบบไม่มีหลังคา)</p>
              <p>- ห้องคาราโอเกะ</p>
              <p>- ร้านซักอบรีด</p>
              <p>- เครื่องซักผ้าหยอดเหรียญ</p>
              <p>- โรงอาหาร</p>
              <p>- เครื่องถ่ายเอกสาร Double A Fast Print</p>                  
              <div className="button" >
                <a onClick={()=>this.checkcondition(4)}>Select</a>
              </div>                  
            </div>
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
            <h2>หอ 40 ปี หญิง</h2>
              <div className="line" />
              <b><p>ราคาห้องพัก (ต่อ 1 คน)</p></b>
              <p>- ค่าห้องพักรวม 7,250 บาท/ภาคเรียน ค่าประกัน 2,000 บาท/ปีการศึกษา *ค่าน้ำ 10 บาท/หน่วย ค่าไฟ 6 บาท/หน่วย (จ่ายวันที่ 1-5 ของเดือน)</p>
              <b><p>ร้านค้าบริเวณหอพัก</p></b>
              <p>- ร้านถ่ายเอกสาร , มินิมาร์ท , ห้องฟิตเนส , ที่เรียนดนตรี , ร้านสลัด , ร้านรับซ่อมคอม</p>
              <b><p>อื่นๆ</p></b>
              <p>- โรงจอดรถ (เป็นพื้นที่ของมหาวิทยาลัย หน้าหอพัก)</p>
              <p>- ร้านซักอบรีด</p>
              <p>- เครื่องซักผ้าหยอดเหรียญ</p>
              <p>- โรงอาหาร</p>
              <p>- ตู้เย็น (มีบางห้อง)</p>
              <div className="button" >
                <a onClick={()=>this.checkcondition(5)}>Select</a>
              </div>                  
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
