# format: {user: {1: {id: 1, username: "farah", nums}}}
# json.user do
#   json.set! user.id do
#     json.extract! user, :id, :first_name, :last_name, :email
#     json.campaign_ids []
#   end
# end

json.extract! user, :id, :first_name, :last_name, :email
