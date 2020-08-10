import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HolidayContainer from '../../HolidayContainer/containers/HolidayContainer.js';
import TripContainer from '../../TripContainer/containers/TripContainer.js';
import UserSelectContainer from '../../UserSelectContainer/containers/UserSelectContainer.js'
import HomeContainer from '../../HomeContainer/containers/HomeContainer.js';
import Journal from '../components/Journal.js';
import Profile from '../components/Profile.js';
import NavBar from '../../NavBar.js';

class MainContainer extends Component {
  constructor(props){
      super(props);
      this.state = {
          selectedTraveller:
            {id: 1,
            image: "beach",
            name: "Alexander Hamilton"},
          isSelectingTraveller: true,
          selectedHoliday: null
      }
      this.handleChange = this.handleChange.bind(this);
      this.hasSelectedTraveller = this.hasSelectedTraveller.bind(this);
      this.handleHolidaySelected = this.handleHolidaySelected.bind(this);
      console.log("RELOADED");
  }


  handleHolidaySelected(holiday){
    this.setState({selectedHoliday: holiday})
  }

  hasSelectedTraveller(){
      this.setState({isSelectingTraveller: false});
  };

  handleChange(selectedTraveller){
      this.setState({selectedTraveller: selectedTraveller});
  };

  render(){
    return (
      <Router>
        <Fragment>
          <NavBar className="sidenav"/>
          <Switch>
            <Route exact path="/" render={(props) => (
                <Fragment>
                    <UserSelectContainer {...props} sendNewTravellerToMain={this.handleChange} isSelectingTraveller={this.state.isSelectingTraveller} hasSelectedTraveller={this.hasSelectedTraveller}/>
                    <HomeContainer selectedTraveller={this.state.selectedTraveller}/>
                </Fragment>
              )}
            />

            <Route path="/profile" render={(props) => (
                <Profile {...props} selectedTraveller={this.state.selectedTraveller} />
                )}
            />

            <Route path="/holidays" render={(props) => (
                <HolidayContainer replace {...props} selectedTraveller={this.state.selectedTraveller} handleHolidaySelected={this.handleHolidaySelected} handleTravellerChange={this.handleChange} hasSelectedTraveller={this.hasSelectedTraveller} />
                )}
            />

            <Route path="/journal" render={(props) => (
                <Journal {...props} selectedTraveller={this.state.selectedTraveller} />
                )}
            />

            <Route path="/trips" render={(props) => (
              <TripContainer {...props} selectedTraveller={this.state.selectedTraveller} selectedHoliday={this.state.selectedHoliday} />
            )}
            />

          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default MainContainer;
