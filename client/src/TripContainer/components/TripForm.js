import React, { Component, Fragment } from 'react';
import Geocode from 'react-geocode';
import apiKey from '../../helpers/apiKey.js';

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
    this.findLocation = this.findLocation.bind(this);
    console.log(apiKey);
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

  findLocation(){
    Geocode.setApiKey(apiKey)
    Geocode.setLanguage("en");
    Geocode.fromAddress(this.state.trip.location).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error)
      }
    )
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
          <button onClick={this.findLocation}>Find Location</button>
          <input type="submit" value="Create" />
        </form>
      </Fragment>
    )
  }
}

export default TripForm;
