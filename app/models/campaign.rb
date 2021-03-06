# == Schema Information
#
# Table name: campaigns
#
#  id                :bigint(8)        not null, primary key
#  title             :string           not null
#  short_description :text             not null
#  long_description  :text             not null
#  goal              :float            not null
#  main_photo_url    :string           not null
#  small_photo_url   :string           not null
#  owner_id          :integer          not null
#  current_sum       :float            default(0.0)
#  start_date        :datetime         not null
#  duration          :integer          not null
#

class Campaign < ApplicationRecord
  validates :title, :short_description, :long_description, :goal, presence: true
  validates :duration, :main_photo_url, :small_photo_url, :owner_id, presence: true
  validates :current_sum, :start_date, presence: true
  validates :goal, numericality: { greater_than: 499 }
  validates :duration, numericality: { less_than: 91 }

  belongs_to :owner,
  foreign_key: :owner_id,
  primary_key: :id,
  class_name: :User

  has_many :contributions
  has_many :rewards

  def add_contribution(amount)
    self.current_sum += amount
    self.save
  end


  def percent_funded
    percent = ((self.current_sum/goal)*100).round
    return "0" if percent == 0
    res = []
    while percent > 0
      sub_percent = (percent % 1000).to_s
      while sub_percent.length < 3 && percent > 999
        sub_percent = "0" + sub_percent
      end
      res.unshift(sub_percent)
      percent /= 1000
    end
    res = res.join(",")
    res
  end

  def backers_count
    self.contributions.length
  end

  def owner_total_campaigns
    self.owner.campaigns.length
  end

  def sum_to_dollars
    num_to_dollars(self.current_sum)
  end

  def goal_to_dollars
    num_to_dollars(self.goal)
  end

  def num_to_dollars(num)
    num = num.to_i
    return "0.00" if num == 0
    res = []
    while num > 0 
        sub_num = (num % 1000).to_s
        while sub_num.length < 3 && num > 999
            sub_num = "0" + sub_num
        end
        res.unshift(sub_num)
        num /= 1000
    end
    res = res.join(",") + ".00"
    res
end

end
