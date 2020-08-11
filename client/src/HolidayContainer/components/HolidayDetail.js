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
        <div className={"sticky-heading", "container-header"}>
          <h1 className="container-title">{this.props.holiday.title}</h1>
          <Link to={"/holidays/" + this.props.holiday.id + "/edit"} className={"right-align-button", "nav-buttons-white-sml"}>Edit Holiday</Link>
        </div>
        <TripContainer handleTripSelected={this.props.handleTripSelected} holiday={this.props.holiday} selectedTrip={this.props.selectedTrip} />
      </React.Fragment>
    )
  }
}

export default HolidayDetail;
