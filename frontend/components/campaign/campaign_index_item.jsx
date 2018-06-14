import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const CampaignIndexItem = ( { campaign }) => {
  console.log(campaign.title);
  return (
    <div>
      <li className="camp-index-item">
        <div className="camp-index-item-inner">
          <Link to={`/campaigns/${campaign.id}`}>
            <img className="campaign-index-item-img" src={campaign.main_photo_url}/>
            <div className="tile-details">
              <div className="f_and_heart">
                <div className="f-type">Funding</div>
                <div className="heart"><i className="far fa-heart" style={{color:"grey"}}></i></div>
              </div>
              <div className="tile-info">
                <p className="tile-title">{campaign.title}</p>
                <p className="tile-sd">{campaign.short_description}</p>
              </div>
              <div className="tile-stats">
                <div className="tile-stats-info">
                  <div className="tile-current_sum"><strong className="num">${campaign.current_sum}</strong> USD raised</div>
                  <div className="tile-percent_funded">{`${campaign.percent_funded} %`}</div>
                </div>
                <div class="tile-bar">
                  <div class="tile-bar-done" style={{width: "75%"}}></div>
                </div>
              </div>
              <div className="tile-duration">{campaign.duration} Days Left</div>
            </div>
          </Link>
        </div>
      </li>
    </div>
  )
}

export default CampaignIndexItem;
