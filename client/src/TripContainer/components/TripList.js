import React, { Fragment } from 'react';
import Trip from './Trip.js';
import { PanelGroup, Panel } from 'rsuite';

const TripList = ({trips}) => {
  if(trips.length === 0){
    return null
  }

  const allTrips = trips.map((trip, index) => {
    return (
      <Panel key={index} header={trip.location} defaultExpanded>
        <Trip trip={trip} />
      </Panel>
    )
  })

  return (
    <Fragment>
      <PanelGroup accordion bordered>
        {allTrips}
      </PanelGroup>
    </Fragment>
  )
}

export default TripList;
