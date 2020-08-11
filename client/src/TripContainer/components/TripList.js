import React, { Fragment } from 'react';
import Trip from './Trip.js';
import { PanelGroup, Panel } from 'rsuite';
import { Link } from 'react-router-dom';

const TripList = ({trips, handleTripSelected, selectedTrip, holiday}) => {
  if(trips.length === 0){
    return (
      <div className="buttons-centered">
        <Link to={"/trips/new"} className="nav-buttons-green">Add Trip</Link>
      </div>
    )
  }

  const allTrips = trips.map((trip, index) => {
    return (
      <Panel key={index} header={trip.location} defaultExpanded>
        <Trip trip={trip} handleTripSelected={handleTripSelected} selectedTrip={selectedTrip} />
      </Panel>
    )
  })

  return (
    <Fragment>
      <div className="buttons-centered">
        <Link to={"/trips/new"} className="nav-buttons-green">Add Trip</Link>
      </div>
        <PanelGroup accordion bordered>
          {allTrips}
        </PanelGroup>
    </Fragment>
  )
}

export default TripList;
