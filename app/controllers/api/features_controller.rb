class Api::FeaturesController < ApplicationController
  def firstfive
    @camps = Campaign.take(5)
    render :firstfive
  end
end
