import React, { Component, Fragment } from 'react';
import { Dropdown } from 'rsuite';

class PlanForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPlanType: null
    }
    this.handlePlanTypeSelect = this.handlePlanTypeSelect.bind(this);
  }

  selectFlight(){
    this.setState({selectedPlanType: "FLIGHT"})
  }

  selectTrain(){
    this.setState({selectedPlanType: "TRAIN"})
  }

  selectAccommodation(){
    this.setState({selectedPlanType: "ACCOMMODATION"})
  }

  selectEvent(){
    this.setState({selectedPlanType: "EVENT"})
  }

  handlePlanTypeSelect(event){
    console.log("Flight");
  }

  render(){
    return (
      <Fragment>
        <h3>Add a Plan</h3>
        <Dropdown title="Plan Type">
          <Dropdown.Item onSelect={this.selectFlight}>Flight</Dropdown.Item>
          <Dropdown.Item onSelect={this.selectTrain}>Train</Dropdown.Item>
          <Dropdown.Item onSelect={this.selectAccommodation}>Accommodation</Dropdown.Item>
          <Dropdown.Item onSelect={this.selectEvent}>Event</Dropdown.Item>
        </Dropdown>
      </Fragment>
    )
  }
}

export default PlanForm;
