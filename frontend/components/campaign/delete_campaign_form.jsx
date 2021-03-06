import React from 'react';
import { deleteCampaign } from '../../actions/campaign_actions';
import { requestUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class DeleteCampaign extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDelete(e) {
        this.props.deleteCampaign(this.props.camp.id)
            .then(() => this.props.getUser(this.props.camp.owner_id))
            .then(() => this.props.closeModal())
    }

    render() {
        if (!this.props.camp) {
            return (
                <div>loading...</div>
            )
        }
        return (
        <div className="delete-campaign-box">
            <div className="delete-campaign-question">Are you sure you want to delete your <strong className="delete-campaign-title">{this.props.camp.title}</strong> campaign?</div>
            <button className="delete-campaign-submit" onClick={(e) => this.handleDelete(e)}>DELETE CAMPAIGN</button>
          </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCampaign: id => dispatch(deleteCampaign(id)),
        closeModal: () => dispatch(closeModal()),
        getUser: id => dispatch(requestUser(id))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(DeleteCampaign));