import React from 'react';
import getGalleryItem from '../gallery_photos';
import { Link } from 'react-router-dom';

const CampaignIndexItem = ({ campaign }) => {

  return (
    <div className="profile-campaign-items">
      <div className="profile-camp-photo">
        <Link to={`/campaigns/${campaign.id}`}><img className="thumb" src={campaign.small_photo_url} /></Link>
      </div>
      <div className="profile-camp-details">
        <Link className="profile-camp-titles" to={`/campaigns/${campaign.id}`}>{`${campaign.title}`}</Link>
        <div className="profile-campaign-owner">
          <div className="profile-by">by</div>
          <Link className="profile-camp-owner-name" to={`/profile/${campaign.owner_id}`}>{campaign.owner_name}</Link>
        </div>
        <div className="profile-camp-sd">{`${campaign.short_description}`}</div>
      </div>
    </div>
  )
}

export default CampaignIndexItem;
