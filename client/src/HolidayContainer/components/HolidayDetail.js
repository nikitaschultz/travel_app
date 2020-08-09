import React from 'react';
import TripContainer from '../../TripContainer/containers/TripContainer.js';

class HolidayDetail extends React.Component{
  componentDidMount(){
    this.props.handleHolidaySelected(this.props.holiday);
  }

  render(){
    return(
      <React.Fragment>
        <div className="sticky-heading">
          <h2>{this.props.holiday.title}</h2>
          <button className="main-green">Add a Trip</button>
          <button className="main-white">Edit Holiday</button>
        </div>
        <TripContainer trips={this.props.holiday.trips} />
      </React.Fragment>
    )
  }
}

export default HolidayDetail;
