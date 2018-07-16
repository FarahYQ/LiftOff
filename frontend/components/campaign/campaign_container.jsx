import { connect } from 'react-redux';
import Campaign from './campaign';
import { fetchCampaign } from '../../actions/campaign_actions';
import { requestUser } from '../../actions/user_actions';
import { createContribution } from '../../actions/contribution_actions';

const mapStateToProps = (state, ownProps) => {
  let camp = state.entities.campaigns[ownProps.match.params.campaignId] ||
    {id: 54};
  return {
    campaign: camp,
    owner: state.entities.users[camp.owner_id] || {last_name: "Raul", first_name: ""}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCampaign: id => dispatch(fetchCampaign(id)),
    requestUser: id => dispatch(requestUser(id)),
    addContribution: amt => dispatch(createContribution(amt))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campaign)
