import React, { Component } from 'react';
import PlanList from '../components/PlanList.js';
import PlanForm from '../components/PlanForm.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Request from '../../helpers/request.js';
import AccommodationEdit from '../components/AccommodationEdit.js';
import EventEdit from '../components/EventEdit.js';
import FlightEdit from '../components/FlightEdit.js';


class PlanContainer extends Component {
  constructor(props){
    super(props);
    this.handlePost = this.handlePost.bind(this);
    this.handlePut = this.handlePut.bind(this);
    this.findPlanById = this.findPlanById.bind(this);
  }

  findPlanById(planType, id){
    return this.props.plans.find(plan => {
      return (plan.id === parseInt(id) && plan.planType === planType);
    })
  }

  handlePost(planType, plan){
    const request = new Request();
    const url = `/api/${planType}`;
    plan.trip = this.props.selectedTrip;
    request.post(url, plan)
    .then(() => {

    })
  }

  handlePut(planType, plan, id){
    const request = new Request();
    const url = `/api/${planType}/${id}`;
    let trip = this.props.selectedTrip;
    delete trip.plans;
    plan.trip = trip;
    request.post(url, plan)
    .then(() => {

    })
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route path="/plans/accommmodations/:id/edit" render={(props) => {
            const id = props.match.params.id;
            const plan = this.findPlanById("ACCOMMODATION", id);
            return <AccommodationEdit
              accommodation={plan}
              onUpdate={this.handlePut} />
          }} />
          <Route path="/plans/events/:id/edit" render={(props) => {
            const id = props.match.params.id;
            const plan = this.findPlanById("EVENT", id);
            return <EventEdit event={plan} onUpdate={this.handlePut} />
          }} />
          <Route path="/plans/flights/:id/edit" render={(props) => {
            const id = props.match.params.id;
            const plan = this.findPlanById("FLIGHT", id);
            return <FlightEdit flight={plan} onUpdate={this.handlePut} />
          }} />
          <Route exact path="/plans/new" render={(props) => {
            return <PlanForm selectedTrip={this.props.selectedTrip} onCreate={this.handlePost} />
          }} />
          <Route render={() => {
            return <PlanList handleTripSelected={this.props.handleTripSelected} trip={this.props.trip} plans={this.props.plans} />
          }} />
        </Switch>
      </Router>
    )
  }
}

export default PlanContainer;
