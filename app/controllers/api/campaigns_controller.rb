class Api::CampaignsController < ApplicationController

  def create
    unless logged_in?
      render json: "Login to create a campaign", status: 401
      return
    end
    @campaign = Campaign.new(campaign_params)
    @campaign.owner_id = current_user.id
    @campaign.goal = @campaign.goal.to_i
    @campaign.start_date = Date.today
    if @campaign.save!
      render :show
    else
      render json: @campaign.errors, status: 422
    end
  end

  def index
    @campaigns = Campaign.all
  end

  def update
    @campaign = Campaign.find_by(id: params[:campaign][:id])
    unless @campaign
      render json: "Cannot find that campaign", status: 404
      return
    end
    unless logged_in? && current_user.id == @campaign.owner_id
      render json: "unauthorized access", status: 401
      return
    end
    if @campaign.update(campaign_params)
      render :show
    else
      render json: @campaign.errors, status: 422
    end
  end

  def show
    @campaign = Campaign.find(params[:id])
    if @campaign
      render :show
    else
      render json: "Cannot find that campaign", status: 404
    end
  end

  def destroy
    @campaign = Campaign.find(params[:id])
    @campaign.destroy
    render :show
  end

  private
  def campaign_params
    params.require(:campaign).permit(:title, :short_description,
      :long_description, :goal, :duration, :end_date, :main_photo_url, :small_photo_url,
      :end_date)
  end

end
