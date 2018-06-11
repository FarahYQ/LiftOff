class Api::CampaignsController < ApplicationController


  def new
  end

  def create
    @campaign = Campaign.create!(campaign_params);
    render :show
  end

  def edit
  end

  def index
    @campaigns = Campaign.all
  end

  def update
  end

  def show
  end

  def delete
  end

  private
  def campaign_params
    params.require(:campaign).permit(:title, :short_description,
      :long_description, :goal, :end_date, :main_photo_url,
      :small_photo_url, :owner_id, :current_sum)
  end




end
