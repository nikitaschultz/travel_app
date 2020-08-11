import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request';
import HolidayList from '../components/HolidayList.js';
import HolidayDetail from '../components/HolidayDetail.js';
import HolidayForm from '../components/HolidayForm.js';
import HolidayEdit from '../components/HolidayEdit.js';
import TripContainer from '../../TripContainer/containers/TripContainer.js';

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
  }

  componentDidMount(){
    const request = new Request();

    let url = 'api/holidays?travellerId=' + this.props.selectedTraveller.id
    request.get(url)
    .then((data) => {
      this.setState({holidays: data})
    })

    url = '/api/travellers'
    request.get(url)
    .then((data) => {
      this.setState({travellers: data})
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
      window.location = "/holidays";
    })
  }

  handlePut(id, holiday){
    const selectedTraveller = this.props.selectedTraveller;
    const request = new Request();
    const url = `/api/holidays/${id}`
    request.post(url, holiday)
    .then(() => {
      window.location = `/holidays/${id}`
      this.props.hasSelectedTraveller();
      this.props.handleTravellerChange(selectedTraveller);
      console.log("this is making the change");
    })
  }

  render(){
    if(this.state.holidays.length === 0){
      return null
    }

    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/holidays/new" render={(props) => {
              return <HolidayForm
                selectedTraveller={this.props.selectedTraveller}
                onCreate={this.handlePost} />
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
            <Route path="/holidays/:id" render={(props) => {
              const id = props.match.params.id;
              const holiday = this.findHolidayById(id);
              return <HolidayDetail
                holiday={holiday}
                handleHolidaySelected={this.props.handleHolidaySelected} />
            }} />
            <Route exact path="/holidays" render={(props) => {
              return <HolidayList holidays={this.state.holidays} />
            }} />
            <Route path="/trips" render={(props) => {
              return <TripContainer holiday={this.props.selectedHoliday} />
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default HolidayContainer;
