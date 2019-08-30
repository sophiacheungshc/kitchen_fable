export const fetchAllRestaurants = () => (
    $.ajax({
        method: 'GET',
        url: 'api/restaurants'
    })
);
export const fetchRestaurant = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/restaurants/${id}`
    })
);

export const searchRestaurants = keyword => (
    $.ajax({
        method: 'GET',
        url: 'api/restaurants',
        data: { keyword }
    })
);

export const searchRestaurantNames = (name) => (
    $.ajax({
        method: 'GET',
        url: 'api/restaurants',
        data: { name }
    })
);

