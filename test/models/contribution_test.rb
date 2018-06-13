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

require 'test_helper'

class ContributionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
