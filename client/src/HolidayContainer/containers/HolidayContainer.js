import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request';
import HolidayList from '../components/HolidayList.js';
import HolidayDetail from '../components/HolidayDetail.js';
import HolidayForm from '../components/HolidayForm.js';
import HolidayEdit from '../components/HolidayEdit.js';

class HolidayContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      holidays: [],
      selectedHoliday: null,
      travellers: []
    }
    this.handleHolidaySelected = this.handleHolidaySelected.bind(this);
    this.findHolidayById = this.findHolidayById.bind(this);
    this.findTravellerById = this.findTravellerById.bind(this);
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

  handleHolidaySelected(holiday){
    this.setState({selectedHoliday: holiday});
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
      window.location = '/holidays';
    })
  }

  handlePatch(id, holiday){
    const request = new Request();
    const url = `/api/holidays/${id}`
    request.patch(url, holiday)
    .then(() => {
      window.location = `/holidays`
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
            <Route exact path="/holidays/:id/edit" render={(props) => {
              const id = props.match.params.id;
              const holiday = this.findHolidayById(id);
              return <HolidayEdit
                holiday={holiday}
                onUpdate={this.handlePatch}
                travellers={this.state.travellers}
                selectedTraveller={this.props.selectedTraveller}
                findTravellerById={this.findTravellerById} />
            }} />
            <Route exact path="/holidays/new" render={(props) => {
              return <HolidayForm
                selectedTraveller={this.props.selectedTraveller}
                onCreate={props.handlePost} />
            }} />
            <Route exact path="/holidays/:id" render={(props) => {
              const id = props.match.params.id;
              const holiday = this.findHolidayById(id);
              return <HolidayDetail
                holiday={holiday}
                handleHolidaySelected={this.handleHolidaySelected}/>
            }} />
            <Route render={() => {
              return <HolidayList holidays={this.state.holidays} />
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default HolidayContainer;
