class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.all
        render "api/restaurants/index"
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        render "api/restaurants/show"
    end

end
