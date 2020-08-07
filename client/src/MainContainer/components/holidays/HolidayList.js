import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Holiday from './Holiday.js';

const Holidays = (props) => {


  if (props.holidays.length === 0){
    return (<p>Loading...</p>)
  }

	const holidays = props.holidays.map((holiday, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <Holiday holiday={holiday} />
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {holidays}
	  </ul>

	)
}


export default Holidays;
