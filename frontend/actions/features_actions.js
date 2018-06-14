import * as FeaturesAPIUtil from '../util/features_api_util';

export const RECEIVE_FIRST_FIVE = 'RECEIVE_FIRST_FIVE';

export const receive_first_five = firstFive => ({
  type: RECEIVE_FIRST_FIVE,
  firstFive
})

export const fetchFirstFive = () => {
  return dispatch => {
    return FeaturesAPIUtil.fetchFirstFive().then(
      camps => dispatch(receive_first_five(camps))
    )
  }
};
