import React, { Component, Fragment } from 'react';
import LocationMap from './LocationMap.js';
import apiKey from '../../helpers/apiKey.js';
import Geocode from 'react-geocode';

class TripEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      trip: this.props.trip,
      showMap: true,
      submissionError: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findLocation = this.findLocation.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let trip = this.state.trip;
    trip[propertyName] = event.target.value;
    this.setState({trip: trip, showMap: false});
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.showMap){
      this.props.onUpdate(this.state.trip.id, this.state.trip)
    }else{
      this.setState({submissionError: "Please search for the trip location and ensure the map displays correctly before submitting."})
    }
  }

  findLocation(){
    Geocode.setApiKey(apiKey);
    Geocode.setLanguage("en");
    Geocode.fromAddress(this.state.trip.location)
    .then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      let trip = this.state.trip;
      trip.latitude = lat;
      trip.longitude = lng;
      this.setState({trip: trip, showMap: true})
    },
    error => {
      console.error(error)
    })
  }

  render(){
    let map = () => {
      if(!this.state.showMap){
        return <p>Please search for a location...</p>
      }else{
        return (
          <Fragment>
            <div className="map-container">
              <LocationMap position={[this.state.trip.latitude, this.state.trip.longitude]} />
            </div>
            <p>Please check the location is correct before submitting.</p>
          </Fragment>
        )
      }
    }

    return (
      <Fragment>
        <h3>Edit</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="location">Trip Location:</label>
          <input type="text"
            name="location"
            onChange={this.handleChange}
            value={this.state.trip.location} />
          <button onClick={this.findLocation}>Find Location</button>
          {map()}
          <p>{this.state.submissionError}</p>
          <input type="submit" value="Update" />
        </form>
      </Fragment>
    )
  }
}

export default TripEdit;
