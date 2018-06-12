import React from 'react';

class ProfileDetail extends React.Component {
  render() {
    return (
      <div>
        `${this.props.match.params.userId}`
      </div>
    )
  }
}

export default ProfileDetail;
