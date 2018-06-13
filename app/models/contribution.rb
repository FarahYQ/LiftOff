# == Schema Information
#
# Table name: contributions
#
#  id          :bigint(8)        not null, primary key
#  amount      :float            not null
#  user_id     :integer          not null
#  campaign_id :integer          not null
#  visibility  :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Contribution < ApplicationRecord
  validates :amount, :user_id, :campaign_id, :visibility, presence: true
  validates :visilibity, inclusion: { in: ["public", "anonymous"]}
  validates :amount, numericality: { greater_than: 0 }

  belongs_to :user
  belongs_to :campaign
end
