import React, { Component, Fragment } from 'react';
import PlanList from '../components/PlanList.js';
import PlanForm from '../components/PlanForm.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class PlanContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/plans/new" render={(props) => {
            return <PlanForm selectedTrip={this.props.selectedTrip} />
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
