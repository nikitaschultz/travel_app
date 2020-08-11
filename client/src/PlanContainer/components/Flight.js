import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Flight = ({plan}) => {
  return (
    <Fragment>
      <h6>{plan.departureAirport} - {plan.arrivalAirport}</h6>
      <p>Departing: {plan.departureTime}</p>
      <p>Arriving: {plan.arrivalTime}</p>
      <p>Flight: {plan.flightNumber}</p>
      <p>Booking Confirmation: {plan.bookingConfirmation}</p>
      <Link to={"/plans/flights/" + plan.id + "/edit"} className="nav-buttons-white-sml">Edit Plan</Link>
    </Fragment>
  )
}

export default Flight;
