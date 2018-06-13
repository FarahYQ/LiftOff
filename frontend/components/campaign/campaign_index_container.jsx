import { connect } from 'react-redux';
import CampaignIndex from './campaign_index';
import { fetchAllCampaigns } from '../../actions/campaign_actions';
import { selectAllCampaigns } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    campaigns: selectAllCampaigns(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCampaigns: () => dispatch(fetchAllCampaigns())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignIndex);
