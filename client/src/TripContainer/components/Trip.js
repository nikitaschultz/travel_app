import React, { Component } from 'react';
import LocationMap from './LocationMap.js';
import PlanContainer from '../../PlanContainer/containers/PlanContainer.js';
import { Link } from 'react-router-dom';

class Trip extends Component {
  constructor(props){
    super(props);
    this.handleAddPlan = this.handleAddPlan.bind(this);
  }

  handleAddPlan(){
    this.props.handleTripSelected(this.props.trip);
  }

  render(){
    const position = [this.props.trip.latitude, this.props.trip.longitude];

    return (
      <div className="trip">
        <div className="map-container">
          <LocationMap position={position} />
        </div>
        <h4>{this.props.trip.location}</h4>
        <Link to={"/plans/new"} onClick={this.handleAddPlan} className="nav-buttons-green">Add a Plan</Link>
        <button className="main-green">Add a Comment</button>
        <Link to={"/trips/" + this.props.trip.id + "/edit"} className="nav-buttons-white">Edit Trip</Link>
        <PlanContainer plans={this.props.trip.plans} />
      </div>
    )
  }
}

export default Trip;
