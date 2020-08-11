import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class EventEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      event: this.props.event,
      confirmed: false,
      warned: false,
      deleted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleWarning = this.handleWarning.bind(this);
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
    this.setState({confirmed: true})
  }

  handleWarning(){
    this.setState({warned: true})
  }

  handleDelete(){
    this.props.onDelete('events', this.state.event.id)
    this.setState({deleted: true})
  }

  render(){
    if(this.state.deleted){
      return (
        <Confirmation url={"/holidays/" + this.props.holiday.id} heading={false} />
      )
    }

    let warning;

    if(this.state.warned){
      warning = (
        <Fragment>
          <p>Warning!  This will permanently delete this plan.  Are you sure you wish to proceed?</p>
          <button onClick={this.handleDelete} className="nav-buttons-white">Yes</button>
        </Fragment>
      )
    }

    if(!this.state.confirmed){
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
          <button onClick={this.handleWarning} className="nav-buttons-white">Delete Plan</button>
          {warning}
        </Fragment>
      )
    }else{
      return (
        <Confirmation url={"/holidays/" + this.props.holiday.id} heading={false} />
      )
    }
  }
}

export default EventEdit;
