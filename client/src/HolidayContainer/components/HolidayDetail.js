import React from 'react';
import TripContainer from '../../TripContainer/containers/TripContainer.js';

const HolidayDetail = ({holiday}) => {
  return(
    <div className="holiday-detail">
      <h1>{holiday.title}</h1>
      <TripContainer trips={holiday.trips} />
    </div>
  )
}

export default HolidayDetail;
