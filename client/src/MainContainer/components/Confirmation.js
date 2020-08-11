import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = ({url}) => {
  return (
    <div className="component">
      <div className="container-header">
        <h1 className="container-title">Success!</h1>
      </div>
      <p>Changes have been saved.</p>
      <Link className="main-green" to={url}>Continue</Link>
    </div>
  )
}

export default Confirmation;
