class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)

        if @review.save
            @review
            render "api/restaurants/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update_attributes(review_params)
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
            render "api/restaurants/show"
        else
            render json: ["Review does not exist."]
        end
    end

    private
    def review_params
        params.require(:review).permit(:overall, :food, :service, :ambience, :comment)
    end

end
