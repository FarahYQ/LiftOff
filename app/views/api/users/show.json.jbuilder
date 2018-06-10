# json.partial! "api/users/user", user: @user
# json.campaign_ids [] user.campaign_ids # user.campaigns.pluck(:id)
json.user do
  json.partial! 'api/users/user', user: @user
  json.campaign_ids []
  json.contributions_ids []
end

json.campaigns do
  json.extract! @user, :first_name, :last_name
end

# user.campaigns.each do |campaign|
#
# end
