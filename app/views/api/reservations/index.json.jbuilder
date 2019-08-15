@reservations.each do |reservation|
  json.reservations do
    json.set! reservation.id do
      json.partial! '/api/reservations/reservation', reservation: reservation
    end
  end
end

@reservations.each do |res|
  json.reviews do
    if (res.review)
        json.set! res.review.id do
          json.extract! res.review, :id, :res_id, :user_id, :overall, :food, 
            :service, :ambience, :comment 
        end
      end
  end
end