import React from 'react';
import TripList from '../components/trips/TripList.js'
//this is exactly the smae and i'll probably refactor it to just use the usual tripContainer
const TripContainer = (props) => {

  return(
    <TripList selectedTraveller={props.selectedTraveller} trips={props.trips} comments={props.comments} />
  )
}

export default TripContainer;
