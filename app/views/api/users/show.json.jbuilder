# json.partial! "api/users/user", user: @user
# json.campaign_ids [] user.campaign_ids # user.campaigns.pluck(:id)
# .order('created_at DESC')

json.user do
    json.partial! 'api/users/user', user: @user
    json.campaign_ids []
    json.contributions_ids []
end

json.hosted do
  json.array! @user.campaigns do |campaign|
    json.extract! campaign, :id, :title, :small_photo_url, :short_description, :owner_id
    json.owner_name campaign.owner.full_name
  end
end

# json.contributions do
#   json.array! @user.contributions.includes(campaigns: [:user]) do |contribution|
#     if user == current_user || contribution.visibility == 'public'
#       json.extract! campaign, :id, :title, :small_photo_url, :short_description, :owner_id
#       json.owner_name contribution.contributor.full_name
#     end
#   end
# end
