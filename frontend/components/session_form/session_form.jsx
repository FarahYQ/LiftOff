import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }
  
  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  demoSubmit(e) {
    e.preventDefault();
    const indiana = Object.assign({}, { first_name: "Indiana", last_name: "Jones",
      email: "treasure@gmail.com",
      password: "treasure"
    });
    this.props.loginDemo(indiana).then(this.props.closeModal);
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


// <button className="session-x" onClick={this.props.closeModal}>x</button>

  render() {

    return (
      <div className="session-form-container">

        <form onSubmit={(e) => this.handleSubmit(e)} className="session-form-box">

          <button className="fb-btn" onClick={(e) => this.demoSubmit(e)}>DEMO LOGIN</button>
          <div className="session-t1">   </div>
          <br/>
          <div className="session-t2">--- Or {this.props.formType.toLowerCase()} with email ---</div>
          <br/>
          <div className="errors">{this.renderErrors()}</div>
        <input type="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            className="login-input"/>
          <br/>
        <input type="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.update('last_name')}
            className="login-input"/>
          <br/>
        <input type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update('email').bind(this)}
            className="login-input"/>
          <br/>
        <input type="password"
            placeholder="Password"
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
          <div className="session-redirect">
            <div>{this.props.navText}</div>
            <div className="session-redirect-btn">{this.props.otherForm}</div>
          </div>
        </form>


      </div>
    )
  }

}

export default withRouter(SessionForm);
