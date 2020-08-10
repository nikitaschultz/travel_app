import React, { Component, Fragment } from 'react';
import Geocode from 'react-geocode';
import apiKey from '../../helpers/apiKey.js';
import LocationMap from './LocationMap.js';

class TripForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      trip: {
        latitude: null,
        longitude: null,
        location: "",
        submissionError: null
      },
      lat: null,
      lng: null,
      showMap: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findLocation = this.findLocation.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let trip = this.state.trip;
    trip[propertyName] = event.target.value;
    this.setState({trip: trip})
  }

  handleSubmit(event){
    event.preventDefault();
    let trip = this.state.trip;
    trip.holiday = this.props.holiday;
    if(this.state.showMap){
      this.props.onCreate(trip, trip.holiday.id)
    }else{
      this.setState({submissionError: "Please search for the trip location and ensure the map displays correctly before submitting."})
    }
  }

  findLocation(){
    Geocode.setApiKey(apiKey)
    Geocode.setLanguage("en");
    Geocode.fromAddress(this.state.trip.location).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({lat: lat, lng: lng, showMap: true, submissionError: null})
      },
      error => {
        console.error(error)
      }
    )
  }

  render(){
    let map = () => {
      if(!this.state.showMap){
        return <p>Please search for a location...</p>
      }else{
        return (
          <Fragment>
            <div className="map-container">
              <LocationMap position={[this.state.lat, this.state.lng]} />
            </div>
            <p>Please check the location is correct before submitting.</p>
          </Fragment>
        )
      }
    }

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
          {map()}
          <p>{this.state.submissionError}</p>
          <input type="submit" value="Create" />
        </form>
      </Fragment>
    )
  }
}

export default TripForm;
