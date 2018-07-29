import React from 'react';
import { Link } from 'react-router-dom';
const CampaignBackersList = ({ contributions }) => {
    let conts = contributions;
    if (contributions.length > 15) { conts = contributions.slice(0,16); }
    return (
        <div>
        <ul className="campaign-backers">
          {conts.map( cont => (
            <li className="campaign-backers-items" key={cont.id}>
                <div className="camp-backer-photo">
                    <Link to={`/profile/${cont.user_id}`}><img className="backer-thumb" />Contributor</Link>
                </div>
                <div className="camp-backer-details">
                    <div className="profile-campaign-owner">{`${cont.amount} USD`}</div>
                </div>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default CampaignBackersList;