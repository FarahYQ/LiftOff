import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>StopGoGo</h1>
      <NavBarContainer />
    </header>
    <Switch>


    </Switch>

  </div>
);

export default App;
