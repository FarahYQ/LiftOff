class Api::CampaignsController < ApplicationController

  def create
    unless logged_in?
      render json: "Login to create a campaign", status: 401
      return
    end

    @camp = Campaign.new(campaign_params)
    @camp.owner_id = current_user.id
    @camp.main_photo_url = "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_tech4.jpg"
    @camp.small_photo_url = "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_tech4-small.jpg"
    if @camp.save
      render :show
    else
      render json: @camp.errors, status: 422
    end
  end

  def index
    @campaigns = Campaign.all
  end

  def update
    @camp = Campaign.find_by(id: params[:campaign][:id])
    unless @camp
      render json: "Cannot find that campaign", status: 404
      return
    end

    unless logged_in? && current_user.id == @camp.owner_id
      render json: "unauthorized access", status: 401
      return
    end

    if @camp.update(campaign_params)
      render :show
    else
      render json: @camp.errors, status: 422
    end
  end

  def show
    @campaign = Campaign.find_by(id: params[:id])
    if @campaign
      render :show
    else
      render json: "Cannot find that campaign", status: 404
    end

  end

  def destroy
    @campaign = Campaign.find(params[:id])
    @campaign.destroy
    render :index
  end

  private
  def campaign_params
    params.require(:campaign).permit(:title, :short_description,
      :long_description, :goal, :duration, :end_date)
  end

end
