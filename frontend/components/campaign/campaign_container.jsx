import { connect } from 'react-redux';
import Campaign from './campaign';
import { fetchCampaign } from '../../actions/campaign_actions';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    campaign: state.entities.campaigns[ownProps.match.params.campaignId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCampaign: id => dispatch(fetchCampaign(id)),
    requestUser: id => dispatch(requestUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campaign)
