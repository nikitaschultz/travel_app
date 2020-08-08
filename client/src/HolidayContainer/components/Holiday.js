import React from 'react';
import { Link } from 'react-router-dom';

const Holiday = ({holiday}) => {

  if (!holiday){
    return "Loading..."
  }
  return (
    <div className="holiday">
      <Link to={"/holidays/" + holiday.id}><h2>{holiday.title}</h2></Link>
    </div>
  )
}

export default Holiday;
