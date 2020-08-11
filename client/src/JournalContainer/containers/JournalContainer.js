import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request';
import JournalList from '../components/JournalList.js';
import JournalDetail from '../components/JournalDetail.js';
import JournalNavBar from '../components/JournalNavBar.js';

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
        <div className="extended-container">
          <JournalNavBar logOut={this.props.logOut} selectedTraveller={this.props.selectedTraveller} />
          <div className="container">
            <Switch>
              <Route exact path="/journal" render={(props) => {
                return <JournalList holidays={published}/>
              }} />
              <Route exact path="/journal/:id" render={(props) => {
                const id = props.match.params.id;
                const holiday = this.findHolidayById(id);
                return <JournalDetail selectedTraveller={this.props.selectedTraveller} holiday={holiday} />
              }} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
}

export default JournalContainer;
