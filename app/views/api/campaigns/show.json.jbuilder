json.campaign do
  json.set! @campaign.id do
    json.partial! '/api/campaigns/campaign', campaign: @campaign
    json.backers_count @campaign.backers_count
    json.percent_funded @campaign.percent_funded
    json.owner_total_campaigns @campaign.owner_total_campaigns
    json.goal_in_dollars @campaign.goal_to_dollars
    json.sum_in_dollars @campaign.sum_to_dollars
  end
end

json.contributions do
  @campaign.contributions.each do |contribution|
    json.set! contribution.id do
      json.extract! contribution, :id, :amount, :user_id, :campaign_id, :visibility
      json.dollars contribution.amount_to_dollars
    end
  end
end

json.users do
  @campaign.contributions.each do |contribution|
    json.set! contribution.user.id do 
      json.extract! contribution.user, :id, :first_name, :last_name, :email, :photo
      json.full_name contribution.user.full_name
    end
  end
end
