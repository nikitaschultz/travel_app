import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class TrainForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      train: {
        planType: "TRAIN",
        date: "",
        bookingConfirmation: "",
        departureStation: "",
        arrivalStation: "",
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
    let train = this.state.train;
    train[propertyName] = event.target.value;
    this.setState({train: train})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate('trains', this.state.train)
    this.setState({confirmed: true})
  }

  render(){
    if(!this.state.confirmed){
      return (
        <Fragment>
          <h4>Train</h4>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" onChange={this.handleChange} value={this.state.train.date} /><br />
            <label htmlFor="bookingConfirmation">Booking Confirmation:</label>
            <input type="text" name="bookingConfirmation" onChange={this.handleChange} value={this.state.train.bookingConfirmation} /><br />
            <label htmlFor="departureStation">Departure Station:</label>
            <input type="text" name="departureStation" onChange={this.handleChange} value={this.state.train.departureStation} /><br />
            <label htmlFor="arrivalStation">Arrival Station:</label>
            <input type="text" name="arrivalStation" onChange={this.handleChange} value={this.state.train.arrivalStation} /><br />
            <label htmlFor="departureTime">Departure Time:</label>
            <input type="text" name="departureTime" onChange={this.handleChange} value={this.state.train.departureTime} /><br />
            <label htmlFor="arrivalTime">Arrival Time:</label>
            <input type="text" name="arrivalTime" onChange={this.handleChange} value={this.state.train.arrivalTime} /><br />
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

export default TrainForm;
