import React, { Component } from 'react';
import { Icon } from 'rsuite';
import { Link } from 'react-router-dom';

class HolidayNavBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="secondary-nav-bar">
        <nav>
          <div className="nav-bar-heading">
            <Icon icon="map" size="2x" />
            <h3 className="nav-bar-title">Holidays</h3>
          </div>
          <Link to={"/holidays"}>Your Holidays</Link><br/>
          <Link to={"/holidays/new"}>Create a Holiday</Link><br/>
        </nav>
        <div>
          <p>Logged in as {this.props.selectedTraveller.name}</p>
          <button className="main-green">Logout</button>
        </div>
      </div>
    )
  }
}

export default HolidayNavBar;
