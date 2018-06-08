import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import LoginFormContainer from
  './session_form/login_form_container';
import SignupFormContainer from
  './session_form/signup_form_container';
  import { AuthRoute } from '../util/route_util';
  import Modal from './modal/modal';
  // <AuthRoute exact path="/login" component={LoginFormContainer}/>
  // <AuthRoute exact path="/signup" component={SignupFormContainer}/>

const App = () => (

  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>


  </div>
);

export default App;
