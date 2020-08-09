import React from 'react';
import TripContainer from '../../TripContainer/containers/TripContainer.js';

const HolidayDetail = ({holiday}) => {
  return(
    <div className="holiday-detail">
      <div className="sticky-heading">
        <h2>{holiday.title}</h2>
        <button className="main-green">Add a Trip</button>
        <button className="main-white">Edit Holiday</button>
      </div>
      <TripContainer trips={holiday.trips} />
    </div>
  )
}

export default HolidayDetail;
