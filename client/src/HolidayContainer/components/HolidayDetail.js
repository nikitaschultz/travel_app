import React from 'react';
import TripContainer from '../../TripContainer/containers/TripContainer.js';
import { Link } from 'react-router-dom';

class HolidayDetail extends React.Component{
  componentDidMount(){
    this.props.handleHolidaySelected(this.props.holiday);
  }

  render(){
    if(!this.props.holiday){
      return <p>Loading...</p>
    }

    return(
      <React.Fragment>
        <div className="sticky-heading">
          <h2>{this.props.holiday.title}</h2>
          <Link to={"/trips/new"} className="nav-buttons-green">Add Trip</Link>
          <Link to={"/holidays/" + this.props.holiday.id + "/edit"} className="nav-buttons-white">Edit Holiday</Link>
        </div>
        <TripContainer holiday={this.props.holiday} />
      </React.Fragment>
    )
  }
}

export default HolidayDetail;
