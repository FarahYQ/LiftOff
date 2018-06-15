import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN,
  RECEIVE_UPDATES, RECEIVE_CAMPAIGN_ERRORS, CLEAR_CAMPAIGN_ERRORS,
  REMOVE_CAMPAIGN, CREATE_CAMPAIGN } from '../actions/campaign_actions';
import merge from 'lodash/merge';

const campaignsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.payload.campaigns);
    case RECEIVE_CAMPAIGNS:
      return merge({}, state, action.campaigns);
    case RECEIVE_CAMPAIGN:
      return merge({}, state, action.payload.campaign)
    case CREATE_CAMPAIGN:
      return merge({}, state, action.payload.campaign)
    case REMOVE_CAMPAIGN:
      let newState = merge({}, state);
      delete newState[action.campaignId];
      return newState;
    case RECEIVE_CAMPAIGN_ERRORS:
      return merge({}, start, {errors:null}, {errors:actions.errors})
    case CLEAR_CAMPAIGN_ERRORS:
      return merge({}, state, {errors:null}, {errors:{}})
    default:
      return state;
  }
}

export default campaignsReducer;
