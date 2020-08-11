import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Accommodation = ({plan}) => {
  return (
    <Fragment>
      <h6>{plan.name}</h6>
      <p>Address: {plan.address}</p>
      <p>Nights: {plan.numOfNights}</p>
      <p>Booking Confirmation: {plan.bookingConfirmation}</p>
      <Link to={"/plans/accommmodations/" + plan.id + "/edit"} className="nav-buttons-white-sml">Edit Plan</Link>
    </Fragment>
  )
}

export default Accommodation;
