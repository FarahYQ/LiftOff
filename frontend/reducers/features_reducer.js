import { RECEIVE_FIRST_FIVE } from '../actions/features_actions';
import merge from 'lodash/merge';

const featuresReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_FIRST_FIVE:
      return merge({}, state, {firstFive: action.firstFive});
    default:
      return state;
  }
}

export default featuresReducer;
