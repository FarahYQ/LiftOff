class CreateCampaigns < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.string :title, null: false
      t.text :short_description, null: false
      t.text :long_description, null: false
      t.float :goal, null: false
      t.datetime :end_date, null: false
      t.string :main_photo_url, null: false
      t.string :small_photo_url, null: false
      t.integer :owner_id, null: false
    end
    add_index :campaigns, :title
  end
end
