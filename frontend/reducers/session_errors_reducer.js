import { RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER, CLEAR_USER_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_USER_ERRORS:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;
