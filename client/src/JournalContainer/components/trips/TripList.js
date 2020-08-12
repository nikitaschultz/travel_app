import React, { Fragment } from 'react';
import Trip from './Trip.js';
import { PanelGroup, Panel } from 'rsuite';

const TripList = (props) => {
  if(props.trips.length === 0){
    return null
  }

  const allTrips = props.trips.map((trip, index) => {
    let commentList = props.comments.filter((comment) => {
      return comment.trip.id === trip.id
    })

    return (
      <Panel key={index} header={trip.location} defaultExpanded>
        <Trip selectedTraveller={props.selectedTraveller} trip={trip} comments={commentList} />
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
