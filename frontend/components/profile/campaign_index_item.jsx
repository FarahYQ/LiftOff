import React from 'react';
import getGalleryItem from '../gallery_photos';

const CampaignIndexItem = ({ campaign }) => (
  <div>
    <div><img src={campaign.small_photo_url} /></div>
    <div>{`${campaign.title}`}</div>
    <div>{`By ${campaign.owner_id}`}</div>
    <div>{`${campaign.short_description}`}</div>
  </div>
)

export default CampaignIndexItem;
