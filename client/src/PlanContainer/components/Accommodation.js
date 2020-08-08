import React, { Fragment } from 'react';

const Accommodation = ({plan}) => {
  return (
    <Fragment>
      <h6>{plan.name}</h6>
      <p>Address: {plan.address}</p>
      <p>Nights: {plan.numOfNights}</p>
      <p>Booking Confirmation: {plan.bookingConfirmation}</p>
    </Fragment>
  )
}

export default Accommodation;
