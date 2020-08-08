import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HolidayContainer from '../../HolidayContainer/containers/HolidayContainer.js';
import UserSelectContainer from '../../UserSelectContainer/containers/UserSelectContainer.js'
import HomeContainer from '../../HomeContainer/containers/HomeContainer.js';
import Journal from '../components/Journal.js';
import Profile from '../components/Profile.js';
import NavBar from '../../NavBar.js';

class MainContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTraveller: "",
            isSelectingTraveller: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.hasSelectedTraveller = this.hasSelectedTraveller.bind(this);
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
                <HolidayContainer {...props} selectedTraveller={this.state.selectedTraveller} />
                )}
            />
            <Route path="/journal" render={(props) => (
                <Journal {...props} selectedTraveller={this.state.selectedTraveller} />
                )}
            />

          </Switch>


          </Fragment>
          </Router>
        )
    }

}

export default MainContainer;
