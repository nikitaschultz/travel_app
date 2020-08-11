import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Event = ({plan}) => {
  return (
    <Fragment>
      <h6>{plan.name}</h6>
      <p>Location: {plan.location}</p>
      <p>Booking Confirmation: {plan.bookingConfirmation}</p>
      <Link to={"/plans/events/" + plan.id + "/edit"} className="nav-buttons-white-sml">Edit Plan</Link>
    </Fragment>
  )
}

export default Event;
