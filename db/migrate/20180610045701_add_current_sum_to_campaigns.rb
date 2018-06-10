class AddCurrentSumToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :current_sum, :float, :default => 0
  end
end
