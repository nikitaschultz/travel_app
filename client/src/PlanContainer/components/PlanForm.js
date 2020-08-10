import React, { Component, Fragment } from 'react';
import { Dropdown } from 'rsuite';
import AccommodationForm from './AccommodationForm.js';
import FlightForm from './FlightForm.js';
import TrainForm from './TrainForm.js';
import EventForm from './EventForm.js';

class PlanForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPlanType: null
    }
    this.selectFlight = this.selectFlight.bind(this);
    this.selectTrain = this.selectTrain.bind(this);
    this.selectAccommodation = this.selectAccommodation.bind(this);
    this.selectEvent = this.selectEvent.bind(this);
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

  render(){
    let form;
    switch(this.state.selectedPlanType){
      case "FLIGHT":
        form = (
          <FlightForm />
        )
        break;
      case "TRAIN":
        form = (
          <TrainForm />
        )
        break;
      case "ACCOMMODATION":
        form = (
          <AccommodationForm />
        )
        break;
      case "EVENT":
        form = (
          <EventForm />
        )
        break;
      default:
        form = (
          <p>Please select a plan type.</p>
        );
    }



    return (
      <Fragment>
        <h3>Add a Plan</h3>
        <Dropdown title="Plan Type">
          <Dropdown.Item onSelect={this.selectFlight}>Flight</Dropdown.Item>
          <Dropdown.Item onSelect={this.selectTrain}>Train</Dropdown.Item>
          <Dropdown.Item onSelect={this.selectAccommodation}>Accommodation</Dropdown.Item>
          <Dropdown.Item onSelect={this.selectEvent}>Event</Dropdown.Item>
        </Dropdown>
        { form }
      </Fragment>
    )
  }
}

export default PlanForm;
