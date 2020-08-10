import React, { Component } from 'react';
import TripList from '../components/TripList.js';
import TripForm from '../components/TripForm.js';
import TripEdit from '../components/TripEdit.js';
import Request from '../../helpers/request.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

  handlePost(trip){
    const request = new Request();
    const url = '/api/trips';
    request.post(url, trip)
    .then(() => {
      window.location = "/trips";
    })
  }

  handlePut(id, trip, holidayId){
    console.log(trip);
    const request = new Request();
    const url = `/api/trips/${id}`;
    request.put(url, trip)
    .then(() => {
      window.location = `/holidays/${holidayId}`
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
          <Route render={() => {
            return <TripList trips={this.props.holiday.trips} />
          }} />
        </Switch>
      </Router>
    )
  }
}

export default TripContainer;
