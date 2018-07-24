
import * as ContributionAPIUtil from '../util/contribution_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CONTRIBUTION =  'RECEIVE_CONTRIBUTION';
export const RECEIVE_CONTRIBUTION_ERRORS = 'RECEIVE_CONTRIBUTION_ERRORS'


export const receiveContribution = contribution =>({
  type: RECEIVE_CONTRIBUTION,
  contribution
});

export const receiveContributionErrors = errors =>({
  type: RECEIVE_CONTRIBUTION_ERRORS,
  errors
})

export const createContribution = contribution => {
  console.log(`${contribution.amount}-------------`)
  return dispatch => {
    return ContributionAPIUtil.createContribution(contribution).then(
      cont => dispatch(receiveContribution(cont)),
      err => dispatch(receiveContributionErrors(err))
    )
  }
}
