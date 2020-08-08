import React, { Fragment } from 'react';

const Event = ({plan}) => {
  return (
    <Fragment>
      <h5>{plan.name}</h5>
      <p>{plan.location}</p>
    </Fragment>
  )
}

export default Event;
