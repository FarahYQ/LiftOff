import React from 'react';
import { updateCampaign, fetchCampaign } from '../../actions/campaign_actions';
import { connect  } from 'react-redux';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class UpdateCampaign extends React.Component {
  constructor(props) {
    super(props);
    let goal = parseInt(this.props.currentInfo.goal) || "";
    this.state= {
      goal: "",
      title: "",
      long_description: "",
      short_description: "",
      duration: ""
    };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const campaignid = this.props.match.params.campaignId;
    this.props.fetchCampaign(campaignid);
  }
 
  update(field) {
    return (e)=>(this.setState({[field]:e.target.value}))
  }

  handleSubmit(e) {
    e.preventDefault();
    let campaign = this.props.campaign;
    let updatedCampaign = this.state;
    if (updatedCampaign.goal === "") { updatedCampaign.goal = campaign.goal }
    if (updatedCampaign.title === "") { updatedCampaign.title = campaign.title }
    if (updatedCampaign.long_description === "") { updatedCampaign.long_description = campaign.long_description }
    if (updatedCampaign.short_description === "") { updatedCampaign.short_description = campaign.short_description }
    if (updatedCampaign.duration === "") { updatedCampaign.duration = campaign.duration }
    Object.assign(campaign, updatedCampaign);
    this.props.updateCamp(campaign).then( payload => {
      this.props.history.push(`/campaigns/${Object.keys(payload.payload.campaign)[0]}`);
    }
  )
}

renderErrors() {
  return this.props.errors;
}

  render() {
      if (!this.props.campaign) {
        return ( <div>loading...</div> )
      }
    let campaign = this.props.campaign;
    return (
      <div className="campaign-form">
        <div className="title-row">
          <div className="title">Campaign: </div>
          <div className="basics"> Update Info</div>
        </div>
        <div className="basics-instr">Make a good first impression: introduce your campaign objectives
          and entice people to learn more. This basic information will represent
          your campaign on your campaign page, on your campaign card, and in
          searches.
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="input-title">Campaign Goal</div>
          <div className="input-tagline">{`Current Goal: $${campaign.goal_in_dollars}`}</div>
            <input type="value" value={this.state.goal} onChange={this.update('goal')}/>
          <div className="input-title">Campaign Title</div>
          <div className="input-tagline">{`Current Title: ${campaign.title}`}</div>
            <input type="value" value={this.state.title} onChange={this.update('title')}/>
            <div className="input-title">Campaign Tagline</div>
            <div className="input-tagline">{`Current Tagline: ${campaign.short_description}`}</div>
            <input type="value" value={this.state.short_description} onChange={this.update('short_description')}/>
            <div className="input-title">Campaign Description</div>
            <div className="input-tagline">{`Current Description: ${campaign.long_description}`}</div>
            <input type="value" value={this.state.long_description} onChange={this.update('long_description')}/>
            <div className="input-title">Campaign Duration</div>
            <div className="input-tagline">{`Current Duration: ${campaign.duration} days`}</div>
           <input className="start-camp-duration" type="value" value={this.state.duration} onChange={this.update('duration')}/>

              <div></div>
              <div className="create-campaign-errors">{this.renderErrors()}</div>
            <input className="start-camp-submit" type="submit" value="UPDATE MY CAMPAIGN"/>


        </form>


      </div>
    )

  }
}



const mapStateToProps = (state, ownProps) => {
    console.log(`########### ${ownProps.match.params.campaignId}`);
  return {
    currentInfo: state.entities.campaignStart,
    ownerId: state.session.id,
    errors: state.errors.campaign,
    campaign: state.entities.campaigns[ownProps.match.params.campaignId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCamp: campaign => dispatch(updateCampaign(campaign)),
    fetchCampaign: id => dispatch(fetchCampaign(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateCampaign));