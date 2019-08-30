class Api::RestaurantsController < ApplicationController

    def index
        if params[:keyword]
            @restaurants = Restaurant.find_by_keyword(params[:keyword])
            unless @restaurants
                render json: ["Sorry, we couldn't find any results for \"#{params[:keyword]}\". Try checking your spelling or using less specific keywords."], status: 404
            end
            render "api/restaurants/index"
        elsif params[:name]
            @restaurants = Restaurant.find_by_name(params[:name])
            unless @restaurants
                render json: ["Sorry, we couldn't find any results for \"#{params[:name]}\". Try checking your spelling or using less specific keywords."], status: 404
            end
            render "api/restaurants/search"
        else
            @restaurants = Restaurant.all
            render "api/restaurants/index"
        end
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        render "api/restaurants/show"
    end

end
