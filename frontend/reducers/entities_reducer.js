import { combineReducers } from 'redux';
import users from './users_reducer';
import campaigns from './campaigns_reducer';
import features from './features_reducer';
import campaignStart from './campaign_start_reducer';

const entitiesReducer = combineReducers({
  users,
  campaigns,
  features,
  campaignStart
});

export default entitiesReducer;
