import React, { Component, Fragment } from 'react';

class TripForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      trip: {
        latitude: null,
        longitude: null,
        location: "",
        holiday: this.props.holiday
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let trip = this.state.trip;
    trip[propertyName] = event.target.value;
    this.setState({trip: trip})
  }

  handleSubmit(event){
    event.preventDefault();

  }

  render(){
    return (
      <Fragment>
        <h3>Add a Trip</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="location">Trip Location:</label>
          <input type="text"
            name="location"
            onChange={this.handleChange}
            value={this.state.trip.location} />
          <input type="submit" onSubmit={this.handleSubmit} />
        </form>
      </Fragment>
    )
  }
}

export default TripForm;
