import React from 'react';
import { makeCampaign } from '../../actions/campaign_actions';
import { connect  } from 'react-redux';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class CreateCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      goal: parseInt(this.props.currentInfo.goal),
      title: this.props.currentInfo.title,
      long_description: "",
      short_description: "",
      duration: ""
    };
    this.update = this.update.bind(this);
  }

  update(field){
    return (e)=>(this.setState({[field]:e.target.value}))
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    
    this.props.makeCamp(this.state).then( payload => {
      this.props.history.push(`/campaigns/${Object.keys(payload.payload.campaign)[0]}`);
    }
  )
}

  render() {
    return (
      <div className="campaign-form">
        <div className="title-row">
          <div className="title">Campaign / </div>
          <div className="basics"> Basics</div>
        </div>
        <div className="basics-section">Basics</div>
        <div className="basics-instr">Make a good first impression: introduce your campaign objectives
          and entice people to learn more. This basic information will represent
          your campaign on your campaign page, on your campaign card, and in
          searches.
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="input-title">Campaign Goal</div>
          <div className="input-tagline">How much do you want to raise?</div>
            <input
              type="value" value={this.state.goal} onChange={this.update('goal')}/>
          <div className="input-title">Campaign Title</div>
          <div className="input-tagline">What is the title of your campaign?</div>
            <input
              type="value" value={this.state.title} onChange={this.update('title')}/>
            <div className="input-title">Campaign Tagline</div>
            <div className="input-tagline">Provide a short description that best describes your campaign to your audience.</div>
            <input
              type="value" value={this.state.short_description} onChange={this.update('short_description')}/>
            <div className="input-title">Campaign Description</div>
            <div className="input-tagline">Provide a description of your campaign.</div>
            <input
              type="value" value={this.state.long_description} onChange={this.update('long_description')}/>
            <div className="input-title">Campaign Duration</div>
            <div className="input-tagline">How many days will you be running your campaign for? You can run a campaign
             for any number of days, with a 60 day duration maximum.</div>
           <input className="start-camp-duration"
              type="value" value={this.state.duration} onChange={this.update('duration')}/>

            <div className="input-title">Launch your campaign before December 15, 2018 11:59pm PST</div>
              <div className="input-tagline">Launch whenever you’re ready before this date. Campaigns
                can only be in draft for 6 months before they expire and are
                removed from your account. You will no longer have access to
                this draft once it expires.
              </div>
              <div></div>
            <input className="start-camp-submit" type="submit" value="CREATE MY CAMPAIGN"/>


        </form>


      </div>
    )

  }
}



const mapStateToProps = state => {
  return {
    currentInfo: state.entities.campaignStart,
    ownerId: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeCamp: campaign => dispatch(makeCampaign(campaign))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateCampaign));
