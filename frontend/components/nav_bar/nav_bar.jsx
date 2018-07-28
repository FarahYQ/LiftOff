import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push("/"))
  }

 // ({currentUser, logout, login, signup})
 render() {
    if (!this.props.currentUser) {
      return (
        <nav className='nav-bar'>
          <div className="nav-left">
            <Link className="logo" to='/'>LIFTOFF</Link>
            <a>Explore</a>
            <a>What We Do</a>
          </div>
          <div className="nav-right">
            <Link to={'/creator'}>Start a Campaign</Link>
            {this.props.login}
            <br/>
            {this.props.signup}
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
            <Link to={'/creator'}>Start a Campaign</Link>
            <Link className='login-header' to={`/profile/${this.props.currentUser.id}`}>
              {this.props.currentUser.first_name} {this.props.currentUser.last_name}
            </Link>
            <button className="logout-button nav-session-btn" onClick={(e) => this.handleLogout(e)}>Log Out</button>
        </div>
        </nav>
      )
    }
  }
}


export default withRouter(NavBar);
