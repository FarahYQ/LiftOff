class Api::ContributionsController < ApplicationController

  def create
    unless logged_in?
      render json: {login: "Log in to create a contribution"}, status: 401
      return
    end
    @contribution = Contribution.new(contribution_params)
    
    # if !@contribution.reward.nil?
    #   if !@contribution.reward.enough_inventory?
    #     UserReward.new(current_user.id)
    #   end
    # end
    if @contribution.save
      @campaign = @contribution.campaign
      @campaign.add_contribution(@contribution.amount)
      # render "/#/campaigns/#{@contribution.campaign_id}"
    else
      render json: @contribution.errors.full_messages, status: 401
    end
  end

  private
  def contribution_params
    params.require(:contribution).permit(:amount, :user_id, :campaign_id,
      :visibility)
  end

end
