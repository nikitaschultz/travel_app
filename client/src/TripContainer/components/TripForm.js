import React from 'react';

class TripForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trip: {
        latitude: null,
        longitude: null,
        location: "",
        holiday: this.props.holiday
      }
    }
  }

  render(){
    return (
      <React.Fragment>
        <p>helloooo</p>
      </React.Fragment>
    )
  }
}

export default TripForm;
