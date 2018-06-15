export const fetchCampaign = id => {
  return $.ajax({
    method: 'GET',
    url: `api/campaigns/${id}`
  })
};

export const fetchAllCampaigns = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/campaigns'
  })
};

export const createCampaign = campaign => {
  return $.ajax({
    method: 'POST',
    url: 'api/campaigns',
    data: {campaign}
  })
};

export const updateCampaign = campaign => {
  return $.ajax({
    method: 'PATCH',
    url: `api/campaigns/${campaign.id}`,
    data: {campaign}
  })
};

export const deleteCampaign = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/campaigns/${id}`
  })
};
