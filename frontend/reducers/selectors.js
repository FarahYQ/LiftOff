// import { CLEAR_USER_ERRORS } from "../actions/session_actions";


export const selectCampaignsFromUser = (campaigns, userId) => {
  let result = [];
  for ( let id in campaigns ) {
    if ( campaigns[id].owner_id === userId ) { result.push(campaigns[id]) }
  }
  return result;
}

export const selectAllCampaigns = state => Object.values(state.entities.campaigns);

export const selectCampaignBackers = ( contributions, users, campId ) => {
  let result = [];
  for ( let id in contributions ) {
    if ( contributions[id].campaign_id === campId ) {
      let cont = contributions[id]
      result.push([cont, users[cont.user_id]]) 
    }
    
  }
  return result;
}