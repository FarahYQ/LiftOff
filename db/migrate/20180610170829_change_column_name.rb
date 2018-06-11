class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :campaigns, :end_date, :duration
    add_column :campaigns, :start_date, :datetime, :null => false
  end
end
