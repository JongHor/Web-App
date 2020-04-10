import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="container">
    <div class="row">
        <div class="col-sm-2 col-md-2">
        <img src={'https://firebasestorage.googleapis.com/v0/b/lab8spendmoney.appspot.com/o/profile.jpg?alt=media&token=7a1c3e39-0b1e-41a9-a913-d91249f6f3a2'} className='card-img-top' alt="..."  />
        </div>
        <div class="col-sm-2 col-md-4">
            <blockquote>
                <p>Thanadon Inthasit(610610584)</p> <small><cite title="Source Title">CPE , CMU</cite></small>
            </blockquote>
            <p> <i class="glyphicon glyphicon-envelope"></i><a herf="https://web.facebook.com/pleumXIII">https://web.facebook.com/pleumXIII</a></p>
        </div>
        <div class="col-sm-2 col-md-2">
        <img src={'https://firebasestorage.googleapis.com/v0/b/expense-3f50b.appspot.com/o/angkeaw_resize.jpg?alt=media&token=3e1a90ce-7221-4a45-bddf-da7624c587c4'} className='card-img-top' alt="..."  />
        </div>
        <div class="col-sm-2 col-md-4">
            <blockquote>
                <p>Apichart Nutchanat (610610707)</p> <small><cite title="Source Title">CPE , CMU</cite></small>
            </blockquote>
            <p> <i class="glyphicon glyphicon-envelope"></i><a herf="https://web.facebook.com/peapichart">https://web.facebook.com/peapichart</a></p>
        </div>
    </div>
</div>
{/* <Link to="/index">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
</Link> */}

      </div>
    )
  }
}
