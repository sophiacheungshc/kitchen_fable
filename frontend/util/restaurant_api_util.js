export const fetchAllRestaurants = () => (
    $.ajax({
        method: 'GET',
        url: 'api/restaurants',
        error: (err) => console.log(err)
    })
);
export const fetchRestaurant = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/restaurants/${id}`,
        error: (err) => console.log(err)
    })
);

export const searchRestaurants = keyword => (
    $.ajax({
        method: 'GET',
        url: 'api/restaurants',
        data: { keyword }
    })
);