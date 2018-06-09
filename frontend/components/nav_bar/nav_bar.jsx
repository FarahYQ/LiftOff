import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout, login, signup}) => {
  // <h2 className='login-header'>{currentUser.username}</h2>
  if (!currentUser) {
    return (
      <nav className='nav-bar'>
        <div className="nav-left">
          <Link className="logo" to='/'>LIFTOFF</Link>
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
          <Link className="logo" to='/'>LIFTOFF</Link>
          <a>Explore</a>
          <a>What We Do</a>
        </div>
        <div className="nav-right">

          <Link className='login-header' to={`/profile/${currentUser.id}`}>{currentUser.username}</Link>
          <button className="logout-button" onClick={logout}>Log Out</button>
      </div>

      </nav>
    )
  }
}


export default NavBar;
