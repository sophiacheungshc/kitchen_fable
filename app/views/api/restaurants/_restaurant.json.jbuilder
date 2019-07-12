json.extract! restaurant, :id, :name, :address, :location, :phone_number, 
    :cuisine, :menu, :hours, :dress_code, :exec_chef, :description

  if restaurant.photo.attached?
    json.photo url_for(restaurant.photo)
  else
    json.photo ''
  end

  # json.rating_arr restaurant.rating_arr

  # json.countReview restaurant.reviews.pluck(:user_id).length

if current_user
  json.userSaved !!restaurant.favorites.find_by(user_id: current_user.id)
end
