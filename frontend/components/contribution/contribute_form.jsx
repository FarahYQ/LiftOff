// import React from 'react';
// import { createContribution } from '../../actions/contribution_actions';
// import { connect  } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import merge from 'lodash/merge';

// class CreateCampaign extends React.Component {
//   constructor(props) {
//     super(props);
//     let goal = parseInt(this.props.currentInfo.goal) || "";
//     this.state= {
//       amount: 0
//     };
//     this.update = this.update.bind(this);
//   }
 
//   update(field) {
//     return (e)=>(this.setState({[field]:e.target.value}))
//   }

//   handleContribution(amt) {
//     let cont = {
//       amount: amt,
//       user_id: 110,
//       campaign_id: this.props.campaign.id,
//       visibility: 'public' 
//     };
//     return (e) => (this.props.addContribution(cont)).then(() => this.props.fetchCampaign(this.props.campaign.id))
//   }

// renderErrors() {

//   return this.props.errors;
// }

//   render() {
//     return (
      
//     )

//   }
// }



// const mapStateToProps = state => {
//     let camp = state.entities.campaigns[ownProps.match.params.campaignId] ||
//     {id: 54};
//   return {
//     campaign: camp,
//     owner: state.entities.users[camp.owner_id] || {last_name: "Raul", first_name: ""}
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addContribution: amt => dispatch(createContribution(amt))
//   }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateCampaign));