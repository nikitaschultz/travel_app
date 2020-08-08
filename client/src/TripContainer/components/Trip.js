import React from 'react';
import LocationMap from './LocationMap.js';

const Trip = ({trip}) => {
  const position = [trip.latitude, -trip.longitude];

  return (
    <div className="trip">
      <h3>{trip.location}</h3>
        <div className="map-container">
          <LocationMap position={position} />
        </div>
    </div>
  )
}

export default Trip;
