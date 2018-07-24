class Api::CampaignsController < ApplicationController

  def create
    unless logged_in?
      err = "Login to create a campaign"
      render json: err, status: 401
      return
    end
    @campaign = Campaign.new(campaign_params)
    @campaign.owner_id = current_user.id
    @campaign.goal = @campaign.goal.to_i unless @campaign.goal == nil
    @campaign.start_date = Date.today
    main_photos = ["https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaign_game.jpg",
    "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaign_watch.jpg",
    "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_pottery1.jpg"
                ]
    small_photos = ["https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_game-small.jpg",
    "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_watch-small.jpg",
    "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_pottery1-small.jpg"
  ]
  idx = rand(0..2)
  @campaign.main_photo_url = main_photos[idx]
  @campaign.small_photo_url = small_photos[idx]
    if @campaign.save
      render :show
    else
      render json: @campaign.errors.full_messages, status: 401
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
