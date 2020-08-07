import React from 'react';
import TripList from '../components/TripList.js'

const TripContainer = ({trips}) => {

  return(
    <TripList trips={trips} />
  )
}

export default TripContainer;
