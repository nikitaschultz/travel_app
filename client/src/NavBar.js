import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Whisper, Tooltip } from 'rsuite';

const NavBar = (props) => {
  const homeToolTip = (
    <Tooltip>Home</Tooltip>
  )

  const profileToolTip = (
    <Tooltip>Profile</Tooltip>
  )

  const holidayToolTip = (
    <Tooltip>Holidays</Tooltip>
  )

  const journalToolTip = (
    <Tooltip>Journal</Tooltip>
  )

  return (
    <nav className="sidenav">
      <ul className="no-bullet">
        <li>
          <img src="/images/logo.png" width="50" height="50" alt="Logo"/>
        </li>
        <br />
        <li>
          <Link to="/">
            <Icon icon="home" size="3x" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <Icon icon="user" size="3x" />
          </Link>
        </li>
        <li className="navLink">
          <Link to="/holidays">
            <Icon icon="map" size="3x" />
          </Link>
        </li>
        <li className="navLink">
          <Link to="/journal" >
            <Icon icon="book" size="3x" />
          </Link>
        </li>

      </ul>
    </nav>
  )
}

export default NavBar;
