import React, { Fragment } from 'react';

const Event = ({plan}) => {
  return (
    <Fragment>
      <h6>{plan.name}</h6>
      <p>Location: {plan.location}</p>
      <p>Booking Confirmation: {plan.bookingConfirmation}</p>
    </Fragment>
  )
}

export default Event;
