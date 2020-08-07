import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  return (


    <header className="sidenav">

      <img src="/images/logomakr_5qa6ga.png" width="100" height="50" alt="Logo"/>

      <ul>
        <li className="navLink">
          <Link to="/">Home</Link>
        </li>
        <li className="navLink">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="navLink">
          <Link to="/holidays">Holidays</Link>
        </li>
        <li className="navLink">
          <Link to="/journal" >Journal</Link>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
