import React from 'react';
import LocationMap from './LocationMap.js';
import PlanContainer from '../../PlanContainer/containers/PlanContainer.js';
import { Link } from 'react-router-dom';

const Trip = ({trip}) => {
  const position = [trip.latitude, -trip.longitude];

  return (
    <div className="trip">
      <div className="map-container">
        <LocationMap position={position} />
      </div>
      <h4>{trip.location}</h4>
      <button className="main-green">Add a Plan</button>
      <button className="main-green">Add a Comment</button>
      <Link to={"/trips/" + trip.id + "/edit"} className="nav-buttons-white">Edit Trip</Link>
      <PlanContainer plans={trip.plans} />
    </div>
  )
}

export default Trip;