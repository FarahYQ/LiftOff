@campaigns.each do |campaign|
  json.set! campaign.id do
    json.partial! 'campaign', campaign: campaign
    json.sum_in_dollars campaign.sum_to_dollars
    json.backers_count campaign.backers_count
    json.percent_funded campaign.percent_funded
    json.owner_total_campaigns campaign.owner_total_campaigns
  end
end
