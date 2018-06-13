class CreateRewards < ActiveRecord::Migration[5.1]
  def change
    create_table :rewards do |t|
      t.string :name, null: false
      t.integer :campaign_id, null: false
      t.text :description, null: false
      t.float :contribution_min, null: false
      t.integer :inventory, null: false
      t.integer :num_claimed, :default => 0
      t.datetime :estimated_delivery, null: false
      t.timestamps
    end
    add_index :rewards, :campaign_id
  end
end
