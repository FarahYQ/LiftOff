# == Schema Information
#
# Table name: rewards
#
#  id                 :bigint(8)        not null, primary key
#  name               :string           not null
#  campaign_id        :integer          not null
#  description        :text             not null
#  contribution_min   :float            not null
#  inventory          :integer          not null
#  num_claimed        :integer          default(0)
#  estimated_delivery :datetime         not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Reward < ApplicationRecord
  belongs_to :campaign


  def enough_inventory?
  end
end
