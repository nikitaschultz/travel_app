import React, { Component, Fragment } from 'react';

class EventEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      event: this.props.event
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let eventObj = this.state.event;
    eventObj[propertyName] = event.target.value;
    this.setState({event: eventObj})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onUpdate('events', this.state.event, this.state.event.id)
  }

  render(){
    return (
      <Fragment>
        <h4>Event</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" onChange={this.handleChange} value={this.state.event.date} /><br />
          <label htmlFor="bookingConfirmation">Booking Confirmation:</label>
          <input type="text" name="bookingConfirmation" onChange={this.handleChange} value={this.state.event.bookingConfirmation} /><br />
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.event.name} /><br />
          <label htmlFor="location">Location:</label>
          <input type="text" name="location" onChange={this.handleChange} value={this.state.event.location} /><br />
          <input type="submit" value="Update" />
        </form>
      </Fragment>
    )
  }
}

export default EventEdit;
