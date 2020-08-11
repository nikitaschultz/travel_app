import React, { Fragment } from 'react';
import Holiday from './Holiday.js';
import { Link } from 'react-router-dom';

const Holidays = (props) => {


  if (props.holidays.length === 0){
    return (<p>Loading...</p>)
  }

	const holidays = props.holidays.map((holiday, index) => {
	  return (
        <li key={index} className="holiday-list-item">
    	    <div className="component">
      	    <Holiday holiday={holiday} />
    	    </div>
  	    </li>
	     )
	})

	return (
    <Fragment>
      <div className="container-header">
        <h1 className="container-title">Your Holidays</h1>
      </div>
  	  <ul className="no-bullet">
  	    {holidays}
        <li>
          <Link to="/holidays/new" className="nav-buttons-green" >New Holiday</Link>
        </li>
  	  </ul>
    </Fragment>
	)
}


export default Holidays;
