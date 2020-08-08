import React from 'react';
import Holiday from './Holiday.js';

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
	  <ul className="no-bullet">
	    {holidays}
	  </ul>
	)
}


export default Holidays;
