import React, { Component, Fragment } from 'react';
import PlanList from '../components/PlanList.js';
import PlanForm from '../components/PlanForm.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Request from '../../helpers/request.js';
import AccommodationEdit from '../components/AccommodationEdit.js';


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

  }

  render(){
    return (
      <Router>
        <Switch>
          <Route path="/plans/accommmodations/:id/edit" render={(props) => {
            const id = props.match.params.id;
            const plan = this.findPlanById("ACCOMMODATION", id);
            console.log(plan);
            return <AccommodationEdit accommodation={plan} onUpdate={this.handlePut} />
          }} />
          <Route exact path="/plans/new" render={(props) => {
            return <PlanForm selectedTrip={this.props.selectedTrip} onCreate={this.handlePost} />
          }} />
          <Route render={() => {
            return <PlanList plans={this.props.plans} />
          }} />
        </Switch>
      </Router>
    )
  }
}

export default PlanContainer;
