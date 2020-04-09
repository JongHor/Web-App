import React, { Component } from 'react'

export default class Footermain extends Component {
    render() {
        return (
            <div>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="social-icons">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-rss" /></a></li>
              <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              <li><a href="#"><i className="fa fa-google" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="copyright-text">
          <p>Copyright © 2084 Company Name</p>
        </div>
      </div>
      <div className="col-md-12">
        <div className="third-arrow">
          <a href="#" className="scroll-link btn btn-dark" data-id="top"><i className="fa fa-angle-up" /></a>
        </div>
      </div>
    </div>
  </footer>
</div>

        )
    }
}
