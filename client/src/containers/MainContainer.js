import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar className="sidenav"/>

      <Switch>
        <Route/>
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
