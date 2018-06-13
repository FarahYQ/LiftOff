import React from 'react';
import getGalleryItem from '../gallery_photos';
import { Link } from 'react-router-dom';

const CampaignIndexItem = ({ campaign }) => (
  <div>
    <Link className="thumb" to={`/campaigns/${campaign.id}`}><img src={campaign.small_photo_url} /></Link>
    <Link className="profile-camp-titles" to={`/campaigns/${campaign.id}`}>{`${campaign.title}`}</Link>
    <div className="profile-camp-owner">{`By ${campaign.owner_name}`}</div>
    <div className="profile-camp-sd">{`${campaign.short_description}`}</div>
  </div>
)

export default CampaignIndexItem;
