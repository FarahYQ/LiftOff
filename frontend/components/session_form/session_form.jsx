import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      email: "email",
      password: "password"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  facebookSubmit(e) {
    e.preventDefault();
    this.setState({ username: "facebookUser", email: "fb_user@gmail.com",
      password: "noPassword"
    });
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="session-form-container">

        <form onSubmit={this.handleSubmit} className="session-form-box">
          <button className="fb-btn">CONTINUE WITH FACEBOOK</button>
          <p className="session-t1">No posts without your permission</p>
          <p className="session-t2">--- Or sign up with email ---</p>
          <br/>
          {this.renderErrors()}
        <input type="username"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"/>
          <br/>
        <input type="email"
            value={this.state.email}
            onChange={this.update('email').bind(this)}
            className="login-input"/>
          <br/>
        <input type="password"
            value={this.state.password}
            onChange={this.update('password').bind(this)}
            className="login-input"/>
          <br/>
          <input
            className="session-submit"
            type="submit"
            value={this.props.formType}
            />
          <br/>
          {this.props.navLink}
        </form>


      </div>
    )
  }

}

export default withRouter(SessionForm);
