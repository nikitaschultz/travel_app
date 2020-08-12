import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class AccommodationForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      accommodation: {
        planType: "ACCOMMODATION",
        date: "",
        bookingConfirmation: "",
        name: "",
        address: "",
        numOfNights: 0
      },
      confirmed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let accommodation = this.state.accommodation;
    accommodation[propertyName] = event.target.value;
    this.setState({accommodation: accommodation})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate('accommodations', this.state.accommodation)
    this.setState({confirmed: true})
  }

  render(){
    if(!this.state.confirmed){
      return (
        <Fragment>
          <h4>Accommodation</h4>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" onChange={this.handleChange} value={this.state.accommodation.date} /><br />
            <label htmlFor="bookingConfirmation">Booking Confirmation:</label>
            <input type="text" name="bookingConfirmation" onChange={this.handleChange} value={this.state.accommodation.bookingConfirmation} /><br />
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.accommodation.name} /><br />
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" onChange={this.handleChange} value={this.state.accommodation.address} /><br />
            <label htmlFor="numOfNights">Number of Nights:</label>
            <input type="number" name="numOfNights" onChange={this.handleChange} value={this.state.accommodation.numOfNights} /><br />
            <input type="submit" value="Create" />
          </form>
        </Fragment>
      )
    }else{
      return (
        <Confirmation url={"/holidays/"} heading={false} />
      )
    }
  }
}

export default AccommodationForm;
