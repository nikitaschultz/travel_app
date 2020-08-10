import React from 'react';
import TripList from '../components/TripList.js';
import TripForm from '../components/TripForm.js';
import TripEdit from '../components/TripEdit.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class TripContainer extends React.Component {
  constructor(props){
    super(props);
    this.findTripById = this.findTripById.bind(this);
  }

  findTripById(id){
    return this.props.holiday.trips.find(trip => {
      return trip.id === parseInt(id);
    })
  }

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/trips/new" render={(props) => {
            return <TripForm holiday={this.props.holiday} />
          }} />
          <Route exact path="/trips/:id/edit" render={(props) => {
            const id = props.match.params.id;
            const trip = this.findTripById(id);
            return <TripEdit trip={trip} />
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
