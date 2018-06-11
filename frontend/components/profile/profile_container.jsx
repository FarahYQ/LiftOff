import Profile from './profile';
import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = ( {session, entities: {users}}, ownProps) => {
  return {
    user: users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(requestUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
