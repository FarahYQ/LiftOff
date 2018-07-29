import { RECEIVE_CAMPAIGN } from '../actions/campaign_actions';
import merge from 'lodash/merge';

const contributionsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_CAMPAIGN:
            return merge({}, state, action.payload.contributions)
        default:
            return state;
    }
}

export default contributionsReducer;