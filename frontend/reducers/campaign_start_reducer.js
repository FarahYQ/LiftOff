import { START_CAMPAIGN } from '../actions/campaign_actions';
import merge from 'lodash/merge';

const campaignStartReducer = ( state = {}, action ) => {
  switch (action.type) {
    case START_CAMPAIGN:
      return merge({}, state, action.current_info)
    default:
      return state;
  }
}

export default campaignStartReducer;
