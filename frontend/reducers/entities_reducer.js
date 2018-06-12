import { combineReducers } from 'redux';
import users from './users_reducer';
import campaigns from './campaigns_reducer';

const entitiesReducer = combineReducers({
  users,
  campaigns
});

export default entitiesReducer;
