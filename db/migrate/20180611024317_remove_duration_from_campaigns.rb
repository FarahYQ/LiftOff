class RemoveDurationFromCampaigns < ActiveRecord::Migration[5.1]
  def change
    remove_column :campaigns, :duration, :datetime
  end
end
