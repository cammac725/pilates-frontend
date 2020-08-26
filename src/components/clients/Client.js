import React from 'react'

export default function Client(props) {
  return (
    <div className="admin-container">
      <div className='panel'>
        <div className="card text-center">
          <div className="card-header">
            <h1>{props.first_name}</h1>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/dashboard" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    </div>

    );
  }
  
