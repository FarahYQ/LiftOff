import * as CampaignAPIUtil from '../util/campaigns_api_util';

export const RECEIVE_CAMPAIGNS = 'RECEIVE_CAMPAIGNS';
export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const RECEIVE_UPDATES = 'RECEIVE_UPDATES';
export const RECEIVE_CAMPAIGN_ERRORS = 'RECEIVE_CAMPAIGN_ERRORS';
export const CLEAR_CAMPAIGN_ERRORS = 'CLEAR_CAMPAIGN_ERRORS';
export const REMOVE_CAMPAIGN = 'REMOVE_CAMPAIGN';


// actions
export const receiveCampaigns = campaigns =>({
  type: RECEIVE_CAMPAIGNS,
  campaigns
});

export const receiveCampaign = payload =>({
  type: RECEIVE_CAMPAIGN,
  payload
});

export const receiveUpdates = updates => ({
  type: RECEIVE_UPDATES,
  updates
});

export const receiveCampaignErrors = errors => ({
  type: RECEIVE_CAMPAIGN_ERRORS,
  errors
});

export const clearCampaignErrors = ()=> ({
  type: CLEAR_CAMPAIGN_ERRORS
});

export const remove_campaign = campaignId => ({
  type: REMOVE_CAMPAIGN,
  campaignId
})


// thunk functions
export const fetchAllCampaigns = () => {
  return dispatch => {
    return CampaignAPIUtil.fetchAllCampaigns().then(
      camps => dispatch(receiveCampaigns(camps))
    )
  }
};

export const fetchCampaign = id => {
  return dispatch => {
    return CampaignAPIUtil.fetchCampaign(id).then(
      payload => dispatch(receiveCampaign(payload))
    )
  }
};

export const createCampaign = campaign => {
  return dispatch => {
    return CampaignAPIUtil.createCampaign(campaign).then(
      payload => dispatch(receiveCampaign(payload))
    )
  }
};

export const updateCampaign = campaign => {
  return dispatch => {
    return CampaignAPIUtil.updateCampaign(campaign).then(
      payload => dispatch(receiveCampaign(payload))
    )
  }
};

export const deleteCampaign = id => {
  return dispatch => {
    return CampaignAPIUtil.deleteCampaign(id).then(
      payload => dispatch(remove_campaign(payload))
    )
  }
};
