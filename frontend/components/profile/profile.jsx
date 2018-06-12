import React from 'react';
import { Link } from 'react-router-dom';
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

  render() {
    if (!this.props.user) {
      return ( <div>loading...</div> )
    }

    return (
      <div>
        <div>

            <img className="profile-pic" src={`${this.props.user.photo}`}/>
            <div>
              Your Campaigns:
              {this.props.campaigns.map(campaign => (
                <li key={`${campaign.id}`}><img className="campaign-card-photo" src={`${this.getGalleryItem()}`}/></li>
              ))}
            </div>

        </div>


      </div>
    )
  }
}


export default Profile;
