class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    profile_pics = [
    "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile1.jpg",
    "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile2.jpg",
    "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile3.jpg",
    "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile4.jpg",
    "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile5.jpg",
    "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile6.jpg",
    "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile7.jpg",
    ]
    @user.photo = profile_pics[rand(0..6)]
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :company_name, :description)
  end

end
