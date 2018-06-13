import React from 'react';
import { withRouter } from 'react-router-dom';
import CampaignIndexContainer from './campaign/campaign_index_container';

class Home extends React.Component {


  render() {

    return (
      <div className="featured">
        
        <CampaignIndexContainer />
      </div>
    )
  }
}

export default Home;
