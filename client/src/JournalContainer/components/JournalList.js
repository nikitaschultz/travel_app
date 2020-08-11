import React from 'react';
import Journal from './Journal.js';

const JournalList = (props) => {

  if (props.holidays.length === 0){
    return (<p>Loading...</p>)
  }

	const holidays = props.holidays.map((holiday, index) => {
	  return (
        <li key={index} className="holiday-list-item">
    	    <div className="component">
      	    <Journal holiday={holiday} />
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


export default JournalList;
