import React from 'react';
import TripList from '../components/trips/TripList.js'

const TripContainer = ({trips}) => {

  return(
    <TripList trips={trips} />
  )
}

export default TripContainer;
