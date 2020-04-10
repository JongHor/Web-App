import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Footermain extends Component {
    render() {
        return (
            <div className="parallax">
  <footer>
    <div className="container">
      <div className="row">
        
      </div>
      <div className="row">
        <div className="copyright-text">
          <p>Pleum (610610584) and Pe (610610707)</p>
          <p>Copyright © 2020</p>
        </div>
      </div>
      <div className="col-md-12">
        <div className="third-arrow">
        <Link to="/home"><a  className="scroll-link btn btn-dark" data-id="top"><i className="fa fa-angle-up" /></a></Link>
        </div>
      </div>
    </div>
  </footer>
</div>

        )
    }
}
