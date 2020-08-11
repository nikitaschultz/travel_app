import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class FlightForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      flight: {
        planType: "FLIGHT",
        date: "",
        bookingConfirmation: "",
        departureAirport: "",
        arrivalAirport: "",
        departureTime: "",
        arrivalTime: ""
      },
      confirmed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let flight = this.state.flight;
    flight[propertyName] = event.target.value;
    this.setState({flight: flight})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate('flights', this.state.flight)
    this.setState({confirmed: true})
  }

  render(){
    if(!this.state.confirmed){
      return (
        <Fragment>
          <h4>Flight</h4>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" onChange={this.handleChange} value={this.state.flight.date} /><br />
            <label htmlFor="bookingConfirmation">Booking Confirmation:</label>
            <input type="text" name="bookingConfirmation" onChange={this.handleChange} value={this.state.flight.bookingConfirmation} /><br />
            <label htmlFor="departureAirport">Departure Airport:</label>
            <input type="text" name="departureAirport" onChange={this.handleChange} value={this.state.flight.departureAirport} /><br />
            <label htmlFor="arrivalAirport">Arrival Airport:</label>
            <input type="text" name="arrivalAirport" onChange={this.handleChange} value={this.state.flight.arrivalAirport} /><br />
            <label htmlFor="departureTime">Departure Time:</label>
            <input type="text" name="departureTime" onChange={this.handleChange} value={this.state.flight.departureTime} /><br />
            <label htmlFor="arrivalTime">Arrival Time:</label>
            <input type="text" name="arrivalTime" onChange={this.handleChange} value={this.state.flight.arrivalTime} /><br />
            <input type="submit" value="Create" />
          </form>
        </Fragment>
      )
    }else{
      return (
        <Confirmation url={"/holidays/" + this.props.holiday.id} heading={false} />
      )
    }
  }
}

export default FlightForm;
