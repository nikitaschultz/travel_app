import React, { Component, Fragment } from 'react';

class TripEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      trip: this.props.trip
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let trip = this.state.trip;
    trip[propertyName] = event.target.value;
    this.setState({trip: trip});
  }

  handleSubmit(event){
    event.preventDefault();
    let trip = this.state.trip
    this.props.onUpdate(this.state.trip.id, this.state.trip, this.props.holiday.id)
  }

  render(){
    return (
      <Fragment>
        <h3>Edit</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="location">Trip Location:</label>
          <input type="text"
            name="location"
            onChange={this.handleChange}
            value={this.state.trip.location} />
          <input type="submit" value="Update" />
        </form>
      </Fragment>
    )
  }
}

export default TripEdit;
