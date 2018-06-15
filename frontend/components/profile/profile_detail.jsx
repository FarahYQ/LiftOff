import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCampaignsFromUser } from '../../reducers/selectors';

class ProfileDetail extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <div className="profile-view">
        <div>
          <img className="profile-pic" src={`${user.photo}`}/>
        </div>


        <div className="about">
          <div className="about-me">About Me</div>
          <div className="about-count">
            <div className="num">{`${this.props.campaigns.length} `}</div>
            <div className="about-text"> Campaigns</div>
          </div>
          <div className="about-count">
            <div className="num">0</div>
            <div className="about-text"> Campaigns</div>
          </div>
          <div className="about-count">
            <div className="num">0</div>
            <div className="about-text"> Campaigns</div>
          </div>
          <div className="verify">
            <div className="about-me verifications">Verifications</div>
            <div className="emails">
              <div className="email-icon"><i class="fas fa-envelope"></i></div>
              <div className="about-text email">Email Verified</div>
            </div>
          </div>
          <div className="find-me">
            <div className="about-me find-me-on">Find Me On</div>
            <div className="profile-social-icons">
              <button className="profile-fb-btn"><i class="fab fa-facebook"></i></button>
              <button><i class="fab fa-twitter-square"></i></button>
              <button><i class="fas fa-globe"></i></button>
              <button><i class="fas fa-globe"></i></button>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default ProfileDetail;
