import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
  if (!currentUser) {
    return (
      <nav className='login'>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign up!</Link>
      </nav>
    )
  } else {
    return (
      <div>
        <h2 className='login-header'>Welcome, {currentUser.username}</h2>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
    )
  }
}

export default NavBar;
