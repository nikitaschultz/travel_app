import React, {Fragment} from 'react';

const Holiday = ({holiday}) => {

  if (!holiday){
    return "Loading..."
  }
  return (
    <div className="holiday">
      <h2>{holiday.title}</h2>
    </div>
  )
}

export default Holiday;
