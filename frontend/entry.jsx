import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signup, login, logout} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // Testing start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  // Testing end

  ReactDOM.render(<Root store={ store }/>, root);
})
