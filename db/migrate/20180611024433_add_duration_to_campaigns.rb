class AddDurationToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :duration, :integer
  end
end
