import React from 'react';
import { Link , withRouter, Route } from 'react-router-dom';
import Campaigns from './campaigns';
import ProfileDetail from './profile_detail';
// src="https://i.pinimg.com/564x/9e/1a/c2/9e1ac2c5d9e21076dd5f4566730840d0.jpg"/>
// {this.props.campaigns.map( campaign => (<li>{`${campaign}`}</li>)}
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userId)
  }

  getGalleryItem() {
    const collectionId = 1522732;
    const numImagesAvailable = 100;

    const randIndex = Math.floor(Math.random()*numImagesAvailable);
    let photo_url = `https://source.unsplash.com/collection/${collectionId}/480x480/?sig=${randIndex}`;
    return photo_url;
  }

  changeProfileView(view) {
    return (e) => {
      if (!this.props.location.pathname === `/profile/${view}`) {
        this.props.history.push(`/profile/${view}`)
      }
    }
  }


  render() {
    const user = this.props.user;
    if (!user) {
      return ( <div>loading...</div> )
    }
    let componentView = ProfileDetail;
    let pathView = `/profile/${user.id}`;
    if (this.props.location.pathname === `/profile/${user.id}/campaigns`) {
      componentView = Campaigns;
      pathView = `/profile/:userId/campaigns`;
    }
    return (
      <div>
        <div>
            <button className="profile-link" onClick={this.changeProfileView(`${user.id}`)}>Profile</button>
            <button className="profile-campaign-link" onClick={this.changeProfileView(`${user.id}/campaigns`)}>Campaigns</button>
            <img className="profile-pic" src={`${user.photo}`}/>
            <Route path={`${pathView}`} component={componentView}/>
        </div>


      </div>
    )
  }
}


export default withRouter(Profile);
