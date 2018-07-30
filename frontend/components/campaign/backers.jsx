import React from 'react';
import { Link } from 'react-router-dom';
const CampaignBackersList = ({ backers }) => {
    let conts = backers;
    if (backers.length > 15) { conts = backers.slice(0,16); }
    return (
        <div>
        <ul className="campaign-backers">
          {conts.map( cont => (
            <li className="campaign-backers-items" key={cont.id}>
                <div className="camp-backer-photo">
                    <Link to={`/profile/${cont[0].user_id}`}><img className="backer-thumb" src={cont[1].photo} /></Link>
                </div>                
                <div className="camp-backer-photo">
                    <Link to={`/profile/${cont[0].user_id}`}>{`${cont[1].full_name}`}</Link>
                </div>
                <div className="camp-backer-details">
                    <div className="profile-campaign-owner">{`$${cont[0].amount} USD`}</div>
                </div>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default CampaignBackersList;