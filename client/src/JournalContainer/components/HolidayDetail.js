import React from 'react';
import TripContainer from '../containers/TripContainer.js';

const HolidayDetail = ({holiday}) => {
  return(
    <div className="holiday-detail">
      <h2 className="sticky-heading">{holiday.title}</h2>
      <TripContainer trips={holiday.trips} />
    </div>
  )
}

export default HolidayDetail;
