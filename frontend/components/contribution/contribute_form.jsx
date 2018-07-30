import React from 'react';
import { createContribution } from '../../actions/contribution_actions';
import { fetchCampaign } from '../../actions/campaign_actions';
import { closeModal } from '../../actions/modal_actions';
import { connect  } from 'react-redux';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class MakeContribution extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      amount: ""
    };
    this.update = this.update.bind(this);
    this.handleContribution = this.handleContribution.bind(this);
  }
 
  update(field) {
    return (e)=>(this.setState({[field]:e.target.value}))
  }

  handleContribution(e) {
    let campId = this.props.campId;
    let userId = this.props.currentUserId;
    e.preventDefault();
    let cont = {
      amount: this.state.amount,
      user_id: userId,
      campaign_id: campId,
      visibility: 'public' 
    };
    this.props.addContribution(cont)
        .then(() => this.props.fetchCampaign(campId))
        .then(() => this.props.closeModal());
  }    

  renderErrors() {
      if (this.props.errors.responseJSON) {
        return(
            <ul>
            {this.props.errors.responseJSON.map((error,i) => (
                <li key={`error-${i}`}>{error}</li>
            ))}
            </ul>
        );
    }
  }

  render() {
    return (
        <div className="contribute-box">
        <form onSubmit={(e) => this.handleContribution(e)} className="contribute-form-box">
        <div className="cont-title">Make a Contribution</div>
        <div className="errors">{this.renderErrors()}</div>
        <input type="amount"
            placeholder="Donation Amount"
            value={this.state.amount}
            onChange={this.update('amount').bind(this)}
            className="contribute-input"
            />
          <br/>
          <input
            className="contribute-submit"
            type="submit"
            value="Submit Contribution"
            />
          <br/>
        </form>
      </div>
    )

  }
}

const mapStateToProps = ({ errors, session }) => {
    return {
      errors: errors.contribution,
      currentUserId: session.id
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    addContribution: amt => dispatch(createContribution(amt)),
    fetchCampaign: id => dispatch(fetchCampaign(id)),
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MakeContribution));