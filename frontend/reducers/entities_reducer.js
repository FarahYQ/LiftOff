import { combineReducers } from 'redux';
import users from './users_reducer';
import campaigns from './campaigns_reducer';
import features from './features_reducer';

const entitiesReducer = combineReducers({
  users,
  campaigns,
  features
});

export default entitiesReducer;
