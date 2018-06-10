# == Schema Information
#
# Table name: campaigns
#
#  id                :bigint(8)        not null, primary key
#  title             :string           not null
#  short_description :text             not null
#  long_description  :text             not null
#  goal              :float            not null
#  end_date          :datetime         not null
#  main_photo_url    :string           not null
#  small_photo_url   :string           not null
#  owner_id          :integer          not null
#  current_sum       :float            default(0.0)
#

class Campaign < ApplicationRecord
  validates :title, :short_description, :long_description, :goal, presence: true
  validates :end_date, :main_photo_url, :small_photo_url, :owner_id, presence: true
  validates :current_sum, presence: true

  belongs_to :owner,
    class_name: :User


  def percent_funded
    ((current_sum/goal)*100).round
  end

  def contributors_count
  end

  def owner_total_campaigns
    owner.campaigns.count
  end






end
