export const createContribution = contribution => {
  console.log(`hello ${contribution.user_id}`);
  return $.ajax({
    method: 'POST',
    url: 'api/contributions',
    data: {contribution}
  })
}
