import React, { Component, Fragment } from 'react';
import Confirmation from '../../MainContainer/components/Confirmation.js';

class TrainEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      train: this.props.train,
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
    let train = this.state.train;
    train[propertyName] = event.target.value;
    this.setState({train: train})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onUpdate('trains', this.state.train, this.state.train.id)
    this.setState({confirmed: true})
  }

  handleWarning(){
    this.setState({warned: true})
  }

  handleDelete(){
    this.props.onDelete('trains', this.state.train.id)
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

export default TrainEdit;
