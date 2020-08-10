import React, { Component, Fragment } from 'react';
import PlanList from '../components/PlanList.js';
import PlanForm from '../components/PlanForm.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Request from '../../helpers/request.js';


class PlanContainer extends Component {
  constructor(props){
    super(props);
    this.handlePost = this.handlePost.bind(this);
  }

  handlePost(planType, plan){
    const request = new Request();
    const url = `/api/${planType}`;
    plan.trip = this.props.selectedTrip;
    console.log(plan);
    request.post(url, plan)
    .then(() => {
      window.location = `/holidays/${this.props.selectedTrip.holiday.id}`
    })
  }

  render(){
    return (
      <Router>
        <Switch>
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
