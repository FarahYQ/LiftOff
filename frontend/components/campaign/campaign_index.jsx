import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CampaignIndexItem from './campaign_index_item';

class CampaignIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCampaigns();
  }

render() {
  const camps = this.props.campaigns;
  if (camps.length === 0) {
    return <div><h3>loading...</h3></div>
  }

  return (
    <div>
      <ul className="campaigns-index">
        {camps.map(
            camp => <CampaignIndexItem key={camp.id} campaign={camp} />
          )}
      </ul>
    </div>
    )
  }
}


export default CampaignIndex;
