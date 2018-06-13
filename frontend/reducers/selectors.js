

export const selectCampaignsFromUser = (campaigns, userId) => {
  let result = [];
  for ( let id in campaigns ) {
    if ( campaigns[id].owner_id === userId ) { result.push(campaigns[id]) }
  }
  return result;
}

export const selectAllCampaigns = state => Object.values(state.entities.campaigns);

// export const selectCampaignsFromFilter = filter => {
//   let result = [];
//   for (let id in campaigns) {
//     if (filter.type === '')
//   }
// }
