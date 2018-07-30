import React from 'react';
import { withRouter } from 'react-router';
import { connect  } from 'react-redux';
import { startCampaign } from '../../actions/campaign_actions';

class StartCampaign extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      goal: 500,
      title: ""
    };
    this.update = this.update.bind(this);
  }

  update(field){
    return (e)=>(this.setState({[field]:e.target.value}))
  }

  isValid(){
    if (this.state.goal < 500 || this.state.title.length > 50) return false;
    return true;
  }

  submitForm(e) {
    e.preventDefault();
    this.props.startCamp(this.state)
    this.props.history.push(`/create-campaign`)
  }

  render(){

    const active = this.isValid();
    return(
      <div className="start-campaign-start">
        <div className="start-campaign-title">Start a campaign</div>
        <div className="start-campaign-subtitle">Raise funds for creative, entrepreneurial, or other passion projects.</div>
        <form onSubmit={this.submitForm.bind(this)}>
          <div className="money-section">
          <div>How much money would you like to raise?</div>
          <div className="money-input">
            <input
              type="value" value={this.state.goal} onChange={this.update('goal')}/>
            <div className="start-currency">USD</div>
        </div>
            <div className="subtext">Minimum $500.</div>
          </div>
          <div className="title-input">
          <div>What is the title of your Campaign?</div>
            <input
              placeholder="My campaign title..." maxLength="50" value={this.state.title} onChange={this.update('title')}
              />
            <div className="subtext">50 Characters Maximum</div>
          </div>

    <button disabled={!active} className={"camp-start-btn" + (active ? "" : " disabled-button")}>START MY CAMPAIGN</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return(
    {
      startCamp: info => dispatch(startCampaign(info))
    }
  );
};


export default withRouter(connect(null, mapDispatchToProps)(StartCampaign));
