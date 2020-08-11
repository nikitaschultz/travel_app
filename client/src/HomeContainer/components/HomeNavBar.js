import React, { Component } from 'react';
import { Icon } from 'rsuite';
import { Link } from 'react-router-dom';

class HomeNavBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="secondary-nav-bar">
        <nav>
          <div className="nav-bar-heading">
            <Icon icon="home" size="2x" />
            <h3 className="nav-bar-title">Home</h3>
          </div>
        </nav>
        <div>
          <p>Logged in as {this.props.selectedTraveller.name}</p>
          <button className="main-green">Logout</button>
        </div>
      </div>
    )
  }
}

export default HomeNavBar;
