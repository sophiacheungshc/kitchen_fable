json.extract! reservation, :id, :user_id, :rest_id, :party, 
    :date, :time, :occasion, :restaurant, :review

    if reservation.restaurant.photo.attached?
        json.photo url_for(reservation.restaurant.photo)
    else
        json.photo ''
    end
