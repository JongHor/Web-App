import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="parallax">
      <div className="container mt-5">
        <div className="card">
          <img src={'https://firebasestorage.googleapis.com/v0/b/expense-3f50b.appspot.com/o/angkeaw_resize.jpg?alt=media&token=3e1a90ce-7221-4a45-bddf-da7624c587c4'} className='card-img-top' alt="..."  />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Apichart Nutchanat (610610707)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/index">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
