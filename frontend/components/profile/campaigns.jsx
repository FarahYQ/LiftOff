import React from 'react';
import CampaignIndexItem from './campaign_index_item';

class Campaigns extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="profile-campaigns-title">Campaigns I'm On</div>
        <ul className="profile-hosted-campaigns">
          {this.props.campaigns.map( campaign => (
            <CampaignIndexItem key={campaign.id}campaign={campaign} />
          ))}
        </ul>
      </div>
    )
  }

}

export default Campaigns;
