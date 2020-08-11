import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = ({url, heading}) => {
  if(heading){
    return (
      <div className="component">
        <div className="container-header">
          <h1 className="container-title">Success!</h1>
        </div>
        <div className="confirmation-screen">
          <p>Your changes have been saved.</p>
          <div className="buttons-centered">
            <Link className="nav-buttons-white" to={url}>Continue</Link>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className="component">
        <div className="confirmation-screen">
          <p>Success! Your changes have been saved.</p>
          <div className="buttons-centered">
            <Link className="nav-buttons-white" to={url}>Continue</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Confirmation;
