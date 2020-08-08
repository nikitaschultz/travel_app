import React from 'react';
import LocationMap from './LocationMap.js';
import PlanContainer from '../../PlanContainer/containers/PlanContainer.js';
import { Panel, PanelGroup } from 'rsuite';

const Trip = ({trip}) => {
  const position = [trip.latitude, -trip.longitude];

  return (
    <div className="trip">
      <div className="map-container">
        <LocationMap position={position} />
      </div>
      <PlanContainer plans={trip.plans} />
    </div>
  )
}

export default Trip;
