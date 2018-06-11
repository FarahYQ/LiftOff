class ChangeColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :campaigns, :duration, :integer, null: false
  end
end
