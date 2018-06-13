class Api::ContributionsController < ApplicationController

  def create
    unless logged_in?
      render json: {login: "Log in to create a contribution"}, status: 401
      return
    end

    @contribution = current_user.contributions.new(contribution_params)
    if !contribution.reward.nil?
      if !contribution.reward.enough_inventory?
      end
    end

    if @contribution.save
      @contribution.campaign.add_contribution(@contribution.amount)
      render "api/campaigns/#{@contribution.campaign_id}"
    else
      render json: @contribution.errors, status: 422
    end
  end

  private
  def contribution_params
    params.require(:contribution).permit(:amount, :user_id, :campaign_id,
      :visibility)
  end

end
