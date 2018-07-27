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
      amount: 0
    };
    this.update = this.update.bind(this);
    this.handleContribution = this.handleContribution.bind(this);
  }
 
  update(field) {
    return (e)=>(this.setState({[field]:e.target.value}))
  }

  handleContribution(e) {
    let campId = this.props.campId;
    console.log(`hellllooooooooooooooo ${campId}`);
    e.preventDefault();
    let cont = {
      amount: this.state.amount,
      user_id: 110,
      campaign_id: campId,
      visibility: 'public' 
    };
    this.props.addContribution(cont)
        .then(() => this.props.fetchCampaign(campId))
        .then(() => this.props.closeModal());
  }    

  renderErrors() {
      console.log(`============= ${this.props.errors.responseJSON}`);
    return(
        this.props.errors.responseJSON
    );
  }

  render() {
    return (
        <div className="contribute-box">

        <form onSubmit={(e) => this.handleContribution(e)} className="contribute-form-box">
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



// const mapStateToProps = state => {
//   return {
//     campaign: camp,
//     owner: state.entities.users[camp.owner_id] || {last_name: "Raul", first_name: ""}
//   };
// }
const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.contribution
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