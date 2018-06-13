json.campaign do
  json.set! @campaign.id do
    json.partial! '/api/campaigns/campaign', campaign: @campaign
    json.backers_count @campaign.backers_count
    json.percent_funded @campaign.percent_funded
    json.owner_total_campaigns @campaign.owner_total_campaigns
  end
end

json.contributions do
  @campaign.contributions.each do |contribution|
    json.set! contribution.id do
      json.extract! contribution, :id, :amount, :user_id, :campaign_id, :visibility
    end
  end
end
