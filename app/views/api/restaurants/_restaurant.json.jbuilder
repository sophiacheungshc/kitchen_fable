json.extract! restaurant, :id, :name, :address, :location, :phone_number, 
    :cuisine, :menu, :hours, :dress_code, :exec_chef, :description

# json.favorites do    
#     restaurant.favorites.each do |fav| 
#         json.set! fav.id do 
#             json.extract! fav, :id, :user_id, :rest_id
#         end
#     end

# end

if current_user
  json.userSaved !!restaurant.favorites.find_by(user_id: current_user.id)
end