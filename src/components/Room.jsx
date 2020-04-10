import React, { Component } from 'react'

export default class Room extends Component {
  render() {
      const name = this.props.number
    return (  
        <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="info-box">
          <span className="info-box-icon bg-aqua"><i class="fa fa-envelope-o"></i></span>

          <div className="info-box-content">
            <span className="info-box-text">{name}</span>
            <span className="info-box-number">1,410</span>
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
