import React, { Fragment } from 'react';
import Trip from './Trip.js';
import { PanelGroup, Panel } from 'rsuite';

const TripList = (props) => {
  if(props.trips.length === 0){
    return null
  }

  const allTrips = props.trips.map((trip, index) => {
    return (
      <Panel key={index} header={trip.location} defaultExpanded>
        <Trip selectedTraveller={props.selectedTraveller} trip={trip} />
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
