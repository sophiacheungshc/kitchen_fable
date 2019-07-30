json.restaurant do   
    json.set! @restaurant.id do   
        json.partial! "api/restaurants/restaurant", restaurant: @restaurant
    end
end

@restaurant.reviews.each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end
end

@restaurant.reviews.each do |review|
    json.users do
        json.set! review.user.id do
            json.partial! 'api/users/user', user: review.user
        end
    end
end