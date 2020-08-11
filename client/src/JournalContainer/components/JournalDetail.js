import React from 'react';
import TripContainer from '../containers/TripContainer.js';

const JournalDetail = (props) => {
  return(
    <div className="holiday-detail">
      <h2 className="sticky-heading">{props.holiday.title}</h2>
      <TripContainer selectedTraveller={props.selectedTraveller} trips={props.holiday.trips} />
    </div>
  )
}

export default JournalDetail;
