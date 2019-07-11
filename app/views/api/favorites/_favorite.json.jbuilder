
# json.set! favorite.id do      
#     json.extract! favorite, :id, :user_id, :rest_id
# end

json.extract! favorite,
    :id,
    :user_id,
    :rest_id,
    :restaurant