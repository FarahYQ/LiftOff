import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Campaign extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const campaignid = this.props.match.params.campaignId;
    this.props.fetchCampaign(campaignid).then(
      (payload) => {
        return this.props.requestUser(payload.payload.campaign[campaignid].owner_id);
      }
    )
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.campaignId !== nextProps.match.params.campaignId) {
      this.props.fetchCampaign(nextProps.match.params.campaignId)
    }
  }

  main() {
    const camp = this.props.campaign;
    const owner = this.props.owner;

    return (
      <div className="campaign-main">
        <div className="q1-q2">
          <div className="q1">
            <img className="campaign-mp" src={camp.main_photo_url}/>
          </div>

          <div className="q2">
            <div className="funding">FUNDING</div>
            <div className="campaign-title">
              {camp.title}
            </div>
            <div className="tagline">
              {camp.short_description}
            </div>
            <div className="project-owner">PROJECT OWNER</div>
            <Link className="owner-link" to={`/profile/${owner.id}`}>{owner.first_name} {owner.last_name}</Link>
            <div className="sum">
              <div className="sum-deets">
                <span>{`$ ${camp.current_sum}`}</span>{` USD raised by ${camp.backers_count} backers`}
              </div>
            </div>
            <div className="tile-bar">
                <div className="tile-bar-done" style={{width: "75%"}}></div>
            </div>
            <div className="funded-deets">
              <div className="percent"><span>{`${camp.percent_funded}% `}</span>{`of ${camp.goal} goal`}</div>
              <div><span>50</span> days left</div>
            </div>
            <div className="backit-row">
              <button className="backit">BACK IT</button>
              <div className="icons">
                <div className="heart"><i className="far fa-heart"></i></div>
                <div><i className="fab fa-facebook-f"></i></div>
                <div><i className="fab fa-twitter"></i></div>
                <div><i className="fas fa-link"></i></div>
              </div>
            </div>
            </div>
          </div>





        <div className="q3-q4">
          <div className="q3">
            <div className="campaign-overview-title">
              <h5>OVERVIEW</h5>
            </div>
            <div className="overview-details">
              <div className="campaign-sp-container">
                <img className="campaign-sp" src={camp.small_photo_url}/>
              </div>
                <div className="overview-long-description">
                  <div className="campaign-ld">{camp.long_description}</div>
                  <div className="campaign-stage">PRODUCTION STAGE</div>
                </div>
              </div>
              <div className="campaign-extras">
                <h5 className="story">STORY</h5>
                <h5 className="updates">UPDATES</h5>
                <h5 className="comments">COMMENTS</h5>
                <h5 className="backers">BACKERS</h5>
              </div>
              <div><img className="campaign-sp-large" src={camp.small_photo_url}/></div>
              <div className="more-words">{camp.long_description}</div>

            </div>
          </div>

          <div className="q4">
            <div className="rewards"></div>
          </div>





      </div>
    )
  }

  render() {
    if (!this.props.campaign) {
      return ( <div>loading...</div> )
    }
    return (
      <div className="campaign">
        {this.main()}
      </div>
    )
  }
}

export default withRouter(Campaign);
