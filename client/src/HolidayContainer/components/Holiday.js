import React, {Fragment} from 'react';

const Holiday = ({holiday}) => {

  if (!holiday){
    return "Loading..."
  }
  return (
    <Fragment>
    <p>
    {holiday.title}
    </p>

    </Fragment>
  )
}

export default Holiday;
