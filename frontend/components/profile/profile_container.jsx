import Profile from './profile';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = ( {session, entities: {users} }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
