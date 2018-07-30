import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import Modal from '../modal/modal';

class CampaignIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.confirmDeleteModal = this.confirmDeleteModal.bind(this);
  }


  showManageLink() {
    let campaign = this.props.campaign;
    if (this.props.currentUser === campaign.owner_id) {
      return (
      <nav>
        <ul>
        <li><Link className="campaign-update-delete" to={`/update-campaign/${campaign.id}`}>Edit</Link></li>
        <li><button className="campaign-update-delete" onClick={(e) => this.confirmDeleteModal(e)}>Delete</button></li>
        </ul>
      </nav>
    );
    } else {
        return (<div></div>);
      }
  }

  confirmDeleteModal(e) {
    e.preventDefault();
    return this.props.deleteCampModal();
  }
  render() {
    let campaign = this.props.campaign;
    return (
      <div className="profile-camp-index-items">
        <div className="profile-campaign-items">
          <div className="profile-camp-photo">
            <Link to={`/campaigns/${campaign.id}`}><img className="thumb" src={campaign.small_photo_url} /></Link>
          </div>
          <div className="profile-camp-details">
            <Link className="profile-camp-titles" to={`/campaigns/${campaign.id}`}>{`${campaign.title}`}</Link>
            <div className="profile-campaign-owner">
              <div className="profile-by">by</div>
              <Link className="profile-camp-owner-name" to={`/profile/${campaign.owner_id}`}>{campaign.owner_name}</Link>
            </div>
            <div className="profile-camp-sd">{`${campaign.short_description}`}</div>
          </div>
        </div>
        {this.showManageLink()}
        <Modal campaignToDelete={campaign} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCampModal: () => dispatch(openModal('deleteCamp'))
  }
}

export default connect(null, mapDispatchToProps)(CampaignIndexItem);
