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
      <div className="campain-main">

        <div className="q1">
          <img className="campaign-mp" src={camp.main_photo_url}/>
        </div>

        <div className="q2">

          <div className="campaign-title">
            {camp.title}
          </div>
          <div className="overview-description">
            {camp.short_description}
          </div>
          <div>PROJECT OWNER</div>
          <Link to={`/profile/${owner.id}`}>{owner.first_name} {owner.last_name}</Link>
        </div>

        <div className="q3">
          <div className="campaign-overview-title">
            <h3>OVERVIEW</h3>
          </div>
          <div className="overview-details">
            <div>
              <div><img className="campaign-sp" src={camp.small_photo_url}/></div>
              <div className="overview-long-description">
                <div className="campaign-ld">{camp.long_description}</div>
                <div className="campaign-stage">PRODUCTION STAGE</div>
              </div>
            </div>
            <div className="campaign-extras">
              <div className="story">STORY</div>
              <div className="updates">UPDATES</div>
              <div className="comments">COMMENTS</div>
              <div className="backers">BACKERS</div>
            </div>
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
