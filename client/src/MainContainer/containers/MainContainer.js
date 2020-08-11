import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HolidayContainer from '../../HolidayContainer/containers/HolidayContainer.js';
import TripContainer from '../../TripContainer/containers/TripContainer.js';
import UserSelectContainer from '../../UserSelectContainer/containers/UserSelectContainer.js'
import HomeContainer from '../../HomeContainer/containers/HomeContainer.js';
import JournalContainer from '../../JournalContainer/containers/JournalContainer.js';
import ProfileContainer from '../../ProfileContainer/containers/ProfileContainer.js';

import NavBar from '../../NavBar.js';

class MainContainer extends Component {
<<<<<<< HEAD
    constructor(props){
        super(props);
        this.state = {
            selectedTraveller: "",
            isSelectingTraveller: true,
            selectedHoliday: null,
            selectedTrip: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.hasSelectedTraveller = this.hasSelectedTraveller.bind(this);
        this.handleHolidaySelected = this.handleHolidaySelected.bind(this);
        this.handleTripSelected = this.handleTripSelected.bind(this);
        this.renderNewDetails = this.renderNewDetails.bind(this);
    }


    handleHolidaySelected(holiday){
        this.setState({selectedHoliday: holiday})
    }

    handleTripSelected(trip){
        this.setState({selectedTrip: trip})
    }

    hasSelectedTraveller(){
        this.setState({isSelectingTraveller: false});
    };

    handleChange(selectedTraveller){
        this.setState({selectedTraveller: selectedTraveller});
    };

    renderNewDetails(newTravellerInfo){
        this.setState({selectedTraveller: newTravellerInfo});
    }

    render(){

        if (this.state.selectedTraveller === ""){
            return(
                <Router>
=======
  constructor(props){
      super(props);
      this.state = {
          selectedTraveller:
            {id: 1,
            image: "beach",
            name: "Alexander Hamilton"},
          isSelectingTraveller: true,
          selectedHoliday: null,
          selectedTrip: null
      }
      this.handleChange = this.handleChange.bind(this);
      this.hasSelectedTraveller = this.hasSelectedTraveller.bind(this);
      this.handleHolidaySelected = this.handleHolidaySelected.bind(this);
      this.handleTripSelected = this.handleTripSelected.bind(this);
      this.logOut = this.logOut.bind(this);
  }


  handleHolidaySelected(holiday){
    this.setState({selectedHoliday: holiday})
  }

  handleTripSelected(trip){
    this.setState({selectedTrip: trip})
  }

  hasSelectedTraveller(){
      this.setState({isSelectingTraveller: false});
  };

  handleChange(selectedTraveller){
      this.setState({selectedTraveller: selectedTraveller});
  };

  logOut(){
    this.setState({isSelectingTraveller: true, selectTraveller: null})
  }

  render(){
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" render={(props) => (
>>>>>>> development
                <Fragment>
                <Switch>

                <Route path="/" render={(props) => (
                    <Fragment>
                    <UserSelectContainer sendNewTravellerToMain={this.handleChange} isSelectingTraveller={this.state.isSelectingTraveller} hasSelectedTraveller={this.hasSelectedTraveller}/>
<<<<<<< HEAD
                    <HomeContainer selectedTraveller={this.state.selectedTraveller}/>
                    </Fragment>
                )}
                />
                </Switch>
=======
                    <HomeContainer logOut={this.logOut} selectedTraveller={this.state.selectedTraveller}/>
>>>>>>> development
                </Fragment>
                </Router>
            )
        } else {

            return (
                <Router>
                <Fragment>
                <NavBar />
                <Switch>
                <Route exact path="/" render={(props) => (
                    <Fragment>
                    <UserSelectContainer sendNewTravellerToMain={this.handleChange} isSelectingTraveller={this.state.isSelectingTraveller} hasSelectedTraveller={this.hasSelectedTraveller}/>
                    <HomeContainer selectedTraveller={this.state.selectedTraveller}/>
                    </Fragment>
                )}
                />

                <Route path="/profile" render={(props) => (
                    <ProfileContainer renderNewDetails={this.renderNewDetails} selectedTraveller={this.state.selectedTraveller} />
                )}
<<<<<<< HEAD
                />

                <Route path="/holidays" render={(props) => (
                    <HolidayContainer
                    selectedTraveller={this.state.selectedTraveller}
                    handleHolidaySelected={this.handleHolidaySelected}
                    handleTripSelected={this.handleTripSelected}
                    handleTravellerChange={this.handleChange}
                    hasSelectedTraveller={this.hasSelectedTraveller}
                    selectedHoliday={this.state.selectedHoliday}
                    selectedTrip={this.state.selectedTrip}
                    />
                )}
                />

                <Route path="/journal" render={(props) => (
                    <Journal selectedTraveller={this.state.selectedTraveller} />
=======
            />

            <Route path="/holidays" render={(props) => (
                <HolidayContainer
                  selectedTraveller={this.state.selectedTraveller}
                  handleHolidaySelected={this.handleHolidaySelected}
                  handleTripSelected={this.handleTripSelected}
                  handleTravellerChange={this.handleChange}
                  hasSelectedTraveller={this.hasSelectedTraveller}
                  selectedHoliday={this.state.selectedHoliday}
                  selectedTrip={this.state.selectedTrip}
                  logOut={this.logOut} />
>>>>>>> development
                )}
                />

<<<<<<< HEAD
                <Route path="/trips" render={(props) => (
                    <TripContainer selectedTraveller={this.state.selectedTraveller} selectedHoliday={this.state.selectedHoliday} />
=======
            <Route path="/journal" render={(props) => (
                <JournalContainer {...props} selectedTraveller={this.state.selectedTraveller} />
>>>>>>> development
                )}
                />

                </Switch>
                </Fragment>
                </Router>
            )
        }
    }
}

export default MainContainer;
