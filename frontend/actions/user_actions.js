import * as APIUserUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
});

export const requestUser = id => {
  return dispatch => {
    return APIUserUtil.fetchUser(id).then(
      payload => dispatch(receiveUser(payload))
    )
  }
}
