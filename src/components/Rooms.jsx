import React,{Component} from 'react'
import Room from './Room';

export default class Rooms extends Component{
  constructor(props){
    super(props)
    this.state ={
        currentUser: null,
       
    }
}
 
  render(){
    const rooms = this.props.rooms.stairs[0].rooms
    console.log(rooms)
  return (
    <div>
     <section className="content">
     <div className="row">
        <h3 align="center">{ this.props.rooms.name}</h3>
     </div>
        <div className="row">
        {
          rooms.map ((room, index) => (
            <Room        
                          index={index}
                          room={room} 
                          hor ={ this.props.rooms}
                          changHor={ this.props.changHor}
                          currentUser={this.props.currentUser}
                          roomindex={this.props.index}
                          refresh={this.props.refresh}
                          />
          ))
        }
        </div>
     </section>
    </div>
  )
}
  }
    