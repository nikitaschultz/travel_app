import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Train = ({plan}) => {
  return (
    <Fragment>
      <h6>{plan.departureStation} - {plan.arrivalStation}</h6>
      <p>Departing: {plan.departureTime}</p>
      <p>Arriving: {plan.arrivalTime}</p>
      <p>Booking Confirmation: {plan.bookingConfirmation}</p>
      <Link to={"/trains/accommmodations/" + plan.id + "/edit"} className="nav-buttons-white-sml">Edit Plan</Link>
    </Fragment>
  )
}

export default Train;
