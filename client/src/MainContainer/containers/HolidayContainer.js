import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request';
import HolidayList from '../components/holidays/HolidayList.js';
// import HolidayForm from '../components/holidays/HolidayForm';

class HolidayContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      holidays: []

    }


  }

  componentDidMount(){
    const request = new Request();
    request.get('api/holidays')
    .then((data) => {
      this.setState({
        holidays: data

      })
    })

  }








  render(){

    if(!this.state.holidays){
      return null
    }

    return (

      <Fragment>

      <Route render={(props) => {
        return <HolidayList holidays={this.state.holidays}/>
      }} />


      </Fragment>


    )
  }
}

export default HolidayContainer;
