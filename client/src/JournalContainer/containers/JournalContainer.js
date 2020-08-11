import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request';
import HolidayList from '../components/HolidayList.js';
import HolidayDetail from '../components/HolidayDetail.js';

class JournalContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      holidays: [],

    }
  }

  componentDidMount(){
    const request = new Request();
    

    const url = '/api/holidays?travellerId=' + this.props.selectedTraveller.id
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



  render(){
    if(this.state.holidays.length === 0){
      return null
    }
    else{
      const published = this.state.holidays.filter(holiday => holiday.published);
      console.log(published)


    return (

      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/journal" render={(props) => {
              return <HolidayList holidays={published}/>
            }} />
            <Route exact path="/journal/:id" render={(props) => {
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
}

export default JournalContainer;
