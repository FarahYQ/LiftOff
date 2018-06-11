json.campaign do
  json.partial! '/api/campaigns/campaign', campaign: @campaign
end

# json.contributions do
#   json.extract! @campaign, :title
# end
