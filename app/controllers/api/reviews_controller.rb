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
        @review = Review.includes(:author).find(params[:id])
        if @review.update(review_params)
            render "api/restaurants/show"
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

    def review_params
        params.require(:review).permit(:res_id, :overall, :food, :service, :ambience, :comment)
    end

end
