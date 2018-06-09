import * as APIUserUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const requestUser = id => {
  return dispatch => {
    return APIUserUtil.fetchUser(id).then(
      user => dispatch(receiveUser(user))
    )
  }
}
