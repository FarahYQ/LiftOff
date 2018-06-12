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
import Home from './home';
import Profile from './profile/profile_container';
import ProfileCampaigns from './profile/campaigns';
const App = () => (

  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>

    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer}/>
      <AuthRoute exact path='/signup' component={SignupFormContainer}/>
      <Route path='/profile/:userId' component={Profile}/>
      <Route path='/' component={Home}/>
      <Redirect to='/'/>
  </Switch>

  </div>
);

export default App;
