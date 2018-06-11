@campaigns.each do |campaign|
  json.set! campaign.id do
    json.partial! 'campaign', campaign: campaign
  end
end
