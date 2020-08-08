import React, { Fragment } from 'react';

const Flight = ({plan}) => {
  return (
    <Fragment>
      <h6>{plan.departureAirport} - {plan.arrivalAirport}</h6>
      <p>Departing: {plan.departureTime}</p>
      <p>Arriving: {plan.arrivalTime}</p>
      <p>Flight: {plan.flightNumber}</p>
      <p>Booking Confirmation: {plan.bookingConfirmation}</p>
    </Fragment>
  )
}

export default Flight;
