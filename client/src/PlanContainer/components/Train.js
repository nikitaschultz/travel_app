import React, { Fragment } from 'react';

const Train = ({plan}) => {
  return (
    <Fragment>
      <h6>{plan.departureStation} - {plan.arrivalStation}</h6>
      <p>Departing: {plan.departureTime}</p>
      <p>Arriving: {plan.arrivalTime}</p>
      <p>Booking Confirmation: {plan.bookingConfirmation}</p>
    </Fragment>
  )
}

export default Train;
