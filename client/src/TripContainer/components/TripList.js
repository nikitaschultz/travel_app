import React from 'react';
import Trip from './Trip.js';

const TripList = ({trips}) => {
  if(trips.length === 0){
    return null
  }

  const allTrips = trips.map((trip, index) => {
    return (
      <Trip key={index} trip={trip} />
    )
  })

  return (
    <div className="tripList">
      {allTrips}
    </div>
  )
}

export default TripList;
