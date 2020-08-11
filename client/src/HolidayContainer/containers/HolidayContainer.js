import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request';
import HolidayList from '../components/HolidayList.js';
import HolidayDetail from '../components/HolidayDetail.js';
import HolidayForm from '../components/HolidayForm.js';
import HolidayEdit from '../components/HolidayEdit.js';
import TripContainer from '../../TripContainer/containers/TripContainer.js';
import HolidayNavBar from '../components/HolidayNavBar.js';
import HolidayWelcome from '../components/HolidayWelcome.js';

class HolidayContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      holidays: [],
      travellers: []
    }
    this.findHolidayById = this.findHolidayById.bind(this);
    this.findTravellerById = this.findTravellerById.bind(this);
    this.handlePut = this.handlePut.bind(this);
    this.fetchHolidays = this.fetchHolidays.bind(this);
  }

  componentDidMount(){
    this.fetchHolidays();
    this.fetchTravellers();
  }

  fetchTravellers(){
    const request = new Request();

    let url = '/api/travellers'
    request.get(url)
    .then((data) => {
      this.setState({travellers: data})
    })
  }

  fetchHolidays(){
    const request = new Request();

    let url = '/api/holidays?travellerId=' + this.props.selectedTraveller.id
    request.get(url)
    .then((data) => {
      this.setState({holidays: data})
    })
  }

  findHolidayById(id){
    return this.state.holidays.find(holiday => {
      return holiday.id === parseInt(id);
    })
  }

  findTravellerById(id){
    return this.state.travellers.find(traveller => {
      return traveller.id === parseInt(id);
    })
  }

  handlePost(holiday){
    const request = new Request();
    const url = '/api/holidays'
    request.post(url, holiday)
    .then(() => {
      this.fetchHolidays()
    })
  }

  handlePut(id, holiday){
    const request = new Request();
    const url = `/api/holidays/${id}`
    delete holiday.trips;
    request.post(url, holiday)
    .then(() => {
      this.fetchHolidays()
    })
  }

  render(){
    if(this.state.holidays.length === 0){
      return null
    }

    return (
      <Router>
        <div className="extended-container">
        <HolidayNavBar selectedTraveller={this.props.selectedTraveller} />
        <div className="container">
          <Switch>
            <Route exact path="/holidays/new" render={(props) => {
              return <HolidayForm
                selectedTraveller={this.props.selectedTraveller}
                onCreate={this.handlePost} />
            }} />
            <Route exact path="/holidays/welcome" render={(props) => {
              return <HolidayWelcome />
            }} />
            <Route exact path="/holidays/:id/edit" render={(props) => {
              const id = props.match.params.id;
              const holiday = this.findHolidayById(id);
              return <HolidayEdit
                holiday={holiday}
                onUpdate={this.handlePut}
                travellers={this.state.travellers}
                selectedTraveller={this.props.selectedTraveller}
                findTravellerById={this.findTravellerById} />
            }} />
            <Route exact path="/holidays/:id" render={(props) => {
              const id = props.match.params.id;
              const holiday = this.findHolidayById(id);
              return <HolidayDetail
                holiday={holiday}
                handleHolidaySelected={this.props.handleHolidaySelected}
                handleTripSelected={this.props.handleTripSelected}
                selectedTrip={this.props.selectedTrip} />
            }} />
            <Route path="/trips" render={(props) => {
              return <TripContainer
                holiday={this.props.selectedHoliday}
                trip={this.props.selectedTrip}
                handleTripSelected={this.props.handleTripSelected} />
            }} />
            <Route render={(props) => {
              return <HolidayList key={Math.random()} holidays={this.state.holidays} />
            }} />
          </Switch>
        </div>
        </div>
      </Router>
    )
  }
}

export default HolidayContainer;
