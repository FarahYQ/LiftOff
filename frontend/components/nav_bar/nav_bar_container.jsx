import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ( {session, entities: { users } } ) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: (
      <button className="nav-session-btn" onClick={() => dispatch(openModal('login'))}>
        Log In
      </button>
    ),
    signup: (
      <button className="nav-session-btn" onClick={() => dispatch(openModal('signup'))}>
        Sign Up
      </button>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
