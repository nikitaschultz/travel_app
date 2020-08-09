import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request';
import HolidayList from '../components/HolidayList.js';
import HolidayDetail from '../components/HolidayDetail.js';
import HolidayForm from '../components/HolidayForm.js';

class HolidayContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      holidays: []
    }
  }

  componentDidMount(){
    const request = new Request();
    const url = 'api/holidays?travellerId=' + this.props.selectedTraveller.id
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

  handlePost(holiday){
    const request = new Request();
    const url = '/api/holidays'
    request.post(url, holiday)
    .then(() => {
      window.location = '/holidays';
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
            <HolidayForm
              selectedTraveller={this.props.selectedTraveller}
              onCreate={this.handlePost} />
            <Route exact path="/holidays" render={(props) => {
              return <HolidayList holidays={this.state.holidays}/>
            }} />
            <Route exact path="/holidays/:id" render={(props) => {
              const id = props.match.params.id;
              const holiday = this.findHolidayById(id);
              return <HolidayDetail holiday={holiday} />
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default HolidayContainer;
