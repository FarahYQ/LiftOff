import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
  if (!currentUser) {
    return (
      <nav className='nav-bar-logged-out'>
        <h1>OutdieGoGo</h1>
        <Link to='/login'>Login</Link>
        <br/>
        <Link to='/signup'>Sign up!</Link>
      </nav>
    )
  } else {
    return (
      <div className="nav-bar-logged-in">
        <h2 className='login-header'>Welcome, {currentUser.username}</h2>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
    )
  }
}

export default NavBar;
