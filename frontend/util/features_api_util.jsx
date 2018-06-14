export const fetchFirstFive = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/firstfive'
  })
};
