import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signup, login, logout} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preloadedState = {

      session: { id: Object.keys(window.currentUser)[0] },
      entities: {
        users: window.currentUser
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Testing start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  // Testing end

  ReactDOM.render(<Root store={ store }/>, root);
})
