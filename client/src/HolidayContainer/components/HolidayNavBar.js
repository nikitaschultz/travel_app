import React, { Component } from 'react';
import { Icon } from 'rsuite';

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
        </nav>
      </div>
    )
  }
}

export default HolidayNavBar;
