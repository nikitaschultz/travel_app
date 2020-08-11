import React, { Component, Fragment } from 'react';
import LocationMap from './LocationMap.js';
import apiKey from '../../helpers/apiKey.js';
import Geocode from 'react-geocode';
import Confirmation from '../../MainContainer/components/Confirmation.js';


class TripEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      trip: this.props.trip,
      showMap: true,
      submissionError: null,
      confirmed: false,
      warned: false,
      deleted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findLocation = this.findLocation.bind(this);
    this.handleWarning = this.handleWarning.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
      this.setState({confirmed: true})
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

  handleWarning(){
    this.setState({warned: true})
  }

  handleDelete(){
    this.props.onDelete(this.state.trip.id)
    this.setState({deleted: true})
  }

  render(){
    if(this.state.deleted){
      return (
        <Confirmation url={"/holidays/" + this.props.holiday.id} />
      )
    }

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

    let warning;

    if(this.state.warned){
      warning = (
        <Fragment>
          <p>Warning!  This will permanently delete this trip.  Are you sure you wish to proceed?</p>
          <button onClick={this.handleDelete} className="nav-buttons-white">Yes</button>
        </Fragment>
      )
    }

    if(!this.state.confirmed){
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
          <button onClick={this.handleWarning} className="nav-buttons-white">Delete Trip</button>
          {warning}
        </Fragment>
      )
    }else{
      return (
        <Confirmation url={"/holidays/" + this.props.holiday.id} />
      )
    }


  }
}

export default TripEdit;
