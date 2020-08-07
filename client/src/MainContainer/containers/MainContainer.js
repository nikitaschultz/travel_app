import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HolidayContainer from './HolidayContainer.js';
import Home from '../components/Home.js';
import Journal from '../components/Journal.js';
import Profile from '../components/Profile.js';
import NavBar from '../../NavBar.js';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar className="sidenav"/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/holidays" component={HolidayContainer}/>
        <Route path="/journal" component={Journal} />

      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
