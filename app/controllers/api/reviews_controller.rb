class Api::ReviewsController < ApplicationController
    def index
        rest = Restaurant.find(params[:restId])
        if rest
            @reviews = rest.reviews.order(:created_at)
        else
            render json: ["Restaurant not found"], status: 404
        end
    end

    def show
        @review = Review.find(params[:id])
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            @review
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def review_params
        params.require(:review).permit(:user_id, :rest_id, :rating, :comment)
    end

end
