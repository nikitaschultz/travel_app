import React from 'react';
import LocationMap from './LocationMap.js';
import CommentBox from '../../containers/CommentBox.js'


const Trip = ({trip}) => {
  const position = [trip.latitude, -trip.longitude];

  return (
    <div className="trip">
      <div className="map-container">
        <LocationMap position={position} />
      </div>
      <CommentBox comments = {trip.comments}/>
    </div>
  )
}

export default Trip;
