# == Schema Information
#
# Table name: campaigns
#
#  id                :bigint(8)        not null, primary key
#  title             :string           not null
#  short_description :text             not null
#  long_description  :text             not null
#  goal              :float            not null
#  duration          :datetime         not null
#  main_photo_url    :string           not null
#  small_photo_url   :string           not null
#  owner_id          :integer          not null
#  current_sum       :float            default(0.0)
#  start_date        :datetime         not null
#

class Campaign < ApplicationRecord
  validates :title, :short_description, :long_description, :goal, presence: true
  validates :duration, :main_photo_url, :small_photo_url, :owner_id, presence: true
  validates :current_sum, :start_date, presence: true

  belongs_to :owner,
  foreign_key: :owner_id,
  primary_key: :id,
  class_name: :User


  def percent_funded
    ((self.current_sum/goal)*100).round
  end

  def contributors_count
  end

  def owner_total_campaigns
    self.owner.campaigns.count
  end






end
