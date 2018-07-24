import { RECEIVE_CONTRIBUTION_ERRORS } from '../actions/contribution_actions';

const contributionErrorsReducer = (state=[], action) => {
    switch (action.type) {
        case RECEIVE_CONTRIBUTION_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default contributionErrorsReducer;