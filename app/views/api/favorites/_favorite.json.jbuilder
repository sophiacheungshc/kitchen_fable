
# json.set! favorite.id do      
#     json.extract! favorite, :id, :user_id, :rest_id
# end

json.extract! favorite,
    :id,
    :user_id,
    :rest_id,
    :restaurant

    if favorite.restaurant.photo.attached?
        json.photo url_for(favorite.restaurant.photo)
    else
        json.photo ''
    end