import React from 'react';
import LocationMap from './LocationMap.js';
import PlanContainer from '../../PlanContainer/containers/PlanContainer.js';
import { Panel, PanelGroup } from 'rsuite';

const Trip = ({trip}) => {
  const position = [trip.latitude, -trip.longitude];

  return (
    <Panel shaded className="trip" header={trip.location}>
      <div className="map-container">
        <LocationMap position={position} />
      </div>
      <PlanContainer plans={trip.plans} />
    </Panel>
  )
}

export default Trip;
