# @restaurants.each do |restaurant|
#     json.extract! restaurant, :name
# end

# json.array! @restaurants do |restaurant|
#     json.extract! restaurant, :name
# end

json.array! @restaurants, :name