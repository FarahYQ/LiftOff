import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import campaign from './campaign_errors_reducer';
import contribution from './contribution_errors_reducer';

const errorsReducer = combineReducers({
  session,
  campaign,
  contribution
});

export default errorsReducer;
