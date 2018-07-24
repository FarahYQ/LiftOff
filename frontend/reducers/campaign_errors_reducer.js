import { RECEIVE_CAMPAIGN_ERRORS, CLEAR_CAMPAIGN_ERRORS } from '../actions/campaign_actions';

const campaignErrorsReducer = (state=[], action) => {
    switch (action.type) {
        case RECEIVE_CAMPAIGN_ERRORS:
            return action.errors;
        case CLEAR_CAMPAIGN_ERRORS:
            return [];
        default:
            return state;
    }
}

export default campaignErrorsReducer;