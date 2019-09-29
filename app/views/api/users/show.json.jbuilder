json.user do 
    json.partial! "api/users/user", user: @user
end

json.reservations @reservations.collect { |reservation| reservation }
json.restaurants @restaurants