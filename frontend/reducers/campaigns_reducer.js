import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const campaignsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.payload.campaigns);
    default:
      return state;
  }
}

export default campaignsReducer;
