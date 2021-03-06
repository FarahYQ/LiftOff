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
  validates :visibility, inclusion: { in: ["public", "anonymous"]}
  validates :amount, numericality: { greater_than: 0 }

  belongs_to :user
  belongs_to :campaign

  def amount_to_dollars()
    num_to_dollars(self.amount)
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
