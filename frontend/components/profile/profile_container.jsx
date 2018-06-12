import Profile from './profile';
import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import { selectCampaignsFromUser } from '../../reducers/selectors';

const mapStateToProps = ( {session, entities: {users, campaigns}}, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId);
  const camps = selectCampaignsFromUser(campaigns, userId);
  return {
    user: users[userId],
    campaigns: camps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(requestUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
