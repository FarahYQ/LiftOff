import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCampaignsFromUser } from '../../reducers/selectors';

class ProfileDetail extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <div className="profile-view">
        <img className="profile-pic" src={`${user.photo}`}/>


        <div className="about">
          <img className="profile-thumbnail" src={`${user.photo}`}/>
          <div className="about-me">About Me</div>
          <div className="about-count">{`${this.props.campaigns.length}`}</div> <div className="about-type">Campaign</div>
        </div>

      </div>
    )
  }
}

export default ProfileDetail;
