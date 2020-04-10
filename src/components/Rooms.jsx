import React from 'react'

import Room from './Room';

export default function Rooms(props) {

    const rooms = props.rooms
  return (
    <div>
     <section className="content">
        <div className="row">
        {
          rooms.map ( room => (
            <Room  key={room._id} 
                          number={room.room} />
          ))
        }
        </div>
     </section>
    </div>
  )
}
