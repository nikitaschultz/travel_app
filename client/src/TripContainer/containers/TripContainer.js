import React, { Component } from 'react';
import TripList from '../components/TripList.js';
import TripForm from '../components/TripForm.js';
import TripEdit from '../components/TripEdit.js';
import Request from '../../helpers/request.js';
import PlanContainer from '../../PlanContainer/containers/PlanContainer.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccommodationEdit from '../../PlanContainer/components/AccommodationEdit.js';

class TripContainer extends Component {
  constructor(props){
    super(props);
    this.findTripById = this.findTripById.bind(this);
  }

  findTripById(id){
    return this.props.holiday.trips.find(trip => {
      return trip.id === parseInt(id);
    })
  }

  handlePost(trip, holidayId){
    const request = new Request();
    const url = '/api/trips';
    request.post(url, trip)
    .then(() => {

    })
  }

  handlePut(id, trip, holidayId){
    const request = new Request();
    const url = `/api/trips/${id}`;
    request.post(url, trip)
    .then(() => {

    })
  }

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/trips/new" render={(props) => {
            return <TripForm
              holiday={this.props.holiday}
              onCreate={this.handlePost} />
          }} />
          <Route exact path="/trips/:id/edit" render={(props) => {
            const id = props.match.params.id;
            const trip = this.findTripById(id);
            return <TripEdit
              trip={trip}
              holiday={this.props.holiday}
              onUpdate={this.handlePut} />
          }} />
          <Route path="/plans" render={(props) => {
            return <PlanContainer selectedTrip={this.props.selectedTrip} />
          }} />
          <Route render={() => {
            return <TripList
              trips={this.props.holiday.trips}
              handleTripSelected={this.props.handleTripSelected} />
          }} />
        </Switch>
      </Router>
    )
  }
}

export default TripContainer;
