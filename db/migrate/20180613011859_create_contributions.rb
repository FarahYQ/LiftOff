class CreateContributions < ActiveRecord::Migration[5.1]
  def change
    create_table :contributions do |t|
      t.float :amount, null: false
      t.integer :user_id, null: false
      t.integer :campaign_id, null: false
      t.string :visibility, null: false

      t.timestamps
    end
    add_index :contributions, :user_id
    add_index :contributions, :campaign_id
  end
end
