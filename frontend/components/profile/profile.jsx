import React from 'react';
import { Link } from 'react-router-dom';
// src="https://i.pinimg.com/564x/9e/1a/c2/9e1ac2c5d9e21076dd5f4566730840d0.jpg"/>
class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userId)
  }

  render() {
    return (
      <div>
        <div className="profile-pic">
            Profile Page

            <img src={`${this.props.user.photo}`}/>

        </div>


      </div>
    )
  }
}


export default Profile;
