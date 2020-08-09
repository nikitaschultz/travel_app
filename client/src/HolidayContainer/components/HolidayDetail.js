import React from 'react';
import TripContainer from '../../TripContainer/containers/TripContainer.js';
import { Link } from 'react-router-dom';

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
          <Link to={"/holidays/" + this.props.holiday.id + "/edit"} className="nav-buttons-white">Edit Holiday</Link>
        </div>
        <TripContainer trips={this.props.holiday.trips} />
      </React.Fragment>
    )
  }
}

export default HolidayDetail;
