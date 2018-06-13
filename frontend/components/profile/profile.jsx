import React from 'react';
import { Link , withRouter, Route } from 'react-router-dom';
import Campaigns from './campaigns';
import ProfileDetail from './profile_detail';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedComponent: "ProfileDetail"
    };
    this.showComponent = this.showComponent.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId)
      this.props.getUser(this.props.match.params.userId)
  }

  showComponent(componentName) {
    this.setState({displayedComponent: componentName});
  }


  render() {
    const user = this.props.user;
    if (!user) {
      return ( <div>loading...</div> )
    }

    const components = {
      "ProfileDetail": <ProfileDetail user={user} campaigns={this.props.campaigns}/>,
    "Campaigns": <Campaigns campaigns={this.props.campaigns}/>
    }

    return (
      <div>
        <div>
            <div className="profile-name">{`${user.first_name} ${user.last_name}`}</div>
            <button className="profile-btn" onClick={() => this.showComponent("ProfileDetail")}>Profile</button>
            <button className="profile-campaign-btn" onClick={() => this.showComponent("Campaigns")}>Campaigns</button>

            <div className="profile-sub">{components[this.state.displayedComponent]}</div>
        </div>


      </div>
    )
  }
}


export default withRouter(Profile);
