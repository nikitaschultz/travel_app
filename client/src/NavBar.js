import React from 'react';


const NavBar = (props) => {
  return (


    <header className="sidenav">

      <img src="/images/logomakr_5qa6ga.png" width="100" height="50" alt="Logo"/>

      <ul>
        <li className="navLink">
          <a href="/home">Home</a>
        </li>
        <li className="navLink">
          <a href="/profile">Profile</a>
        </li>
        <li className="navLink">
          <a href="/holidays">Holidays</a>
        </li>
        <li className="navLink">
          <a href="/journal" >Journal</a>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
