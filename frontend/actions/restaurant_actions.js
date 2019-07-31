import * as RestAPI from '../util/restaurant_api_util';

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveAllRestaurants = (restaurants) => ({
    type: RECEIVE_ALL_RESTAURANTS,
    restaurants
});
export const receiveRestaurant = (payload) => ({
    type: RECEIVE_RESTAURANT,
    payload
});

export const fetchAllRestaurants = () => (dispatch) => (
    RestAPI.fetchAllRestaurants()
        .then( restaurants => dispatch(receiveAllRestaurants(restaurants)))
);
export const fetchRestaurant = (id) => (dispatch) => (
    RestAPI.fetchRestaurant(id)
        .then( 
            restaurant => dispatch(receiveRestaurant(restaurant))
        )
);

export const searchRestaurants = (keyword) => (dispatch) => (
    RestAPI.searchRestaurants(keyword)
        .then( searchResult => (dispatch(receiveAllRestaurants(searchResult))))
);