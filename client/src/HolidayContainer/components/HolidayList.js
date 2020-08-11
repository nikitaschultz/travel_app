import React, { Fragment } from 'react';
import Holiday from './Holiday.js';

const Holidays = (props) => {


  if (props.holidays.length === 0){
    return (
      <Fragment>
        <div className="container-header">
          <h1 className="container-title">My Holidays</h1>
        </div>
        <div className="component">
          <Holiday holiday={null} />
        </div>
      </Fragment>
    )
  }

	const holidays = props.holidays.map((holiday, index) => {
    if(!holiday.published){
      return (
          <li key={index} className="holiday-list-item">
            <div className="component">
              <Holiday holiday={holiday} />
            </div>
          </li>
      )
    }else{
      return null
    }
	})

	return (
    <Fragment>
      <div className="container-header">
        <h1 className="container-title">Your Holidays</h1>
      </div>
  	  <ul className="no-bullet">
  	    {holidays}
  	  </ul>
    </Fragment>
	)
}


export default Holidays;
