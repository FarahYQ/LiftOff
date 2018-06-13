import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Campaign extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCampaign(this.props.match.params.campaignId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.campaignId !== nextProps.match.params.campaignId) {
      this.props.fetchCampaign(nextProps.match.params.campaignId)
    }
  }

  main() {
    const camp = this.props.campaign;


    return (
      <div className="campain-main">
        <div className="campaign-overview-title">
          <h3>OVERVIEW</h3>
        </div>
        <img className="campaign-mp" src={camp.main_photo_url}/>
        <div className="overview-description">
          {camp.short_description}
        </div>
        <div className="overview-long-description">
          {camp.long_description}
        </div>

      </div>
    )
  }

  render() {
    if (!this.props.campaign) {
      return ( <div>loading...</div> )
    }
    return (
      <div className="campaign">
        {this.main()}
      </div>
    )
  }
}

export default withRouter(Campaign);
