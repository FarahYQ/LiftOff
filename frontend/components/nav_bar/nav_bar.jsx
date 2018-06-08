import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout, login, signup}) => {
  if (!currentUser) {
    return (
      <nav className='nav-bar'>
        <div className="nav-left">
          <h1>LIFTOFF</h1>
          <a>Explore</a>
          <a>What We Do</a>
        </div>
        <div className="nav-right">
          <div>{login}</div>
          <br/>
          <div>{signup}</div>

      </div>
      </nav>
    )
  } else {
    return (
      <nav className="nav-bar">
        <div className="nav-left">
          <h1>LIFTOFF</h1>
          <a>Explore</a>
          <a>What We Do</a>
        </div>
        <div className="nav-right">
          <h2 className='login-header'>{currentUser.username}</h2>
          <button className="logout-button" onClick={logout}>Log Out</button>
      </div>

      </nav>
    )
  }
}


export default NavBar;
