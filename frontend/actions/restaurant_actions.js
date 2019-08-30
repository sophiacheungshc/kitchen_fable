import * as RestAPI from '../util/restaurant_api_util';

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const LOAD_RESTAURANTS = 'LOAD_RESTAURANTS';

export const receiveAllRestaurants = (restaurants) => ({
    type: RECEIVE_ALL_RESTAURANTS,
    restaurants
});

export const receiveRestaurant = (payload) => ({
    type: RECEIVE_RESTAURANT,
    payload
});

const loadRestaurants = () => ({
    type: LOAD_RESTAURANTS
});

export const fetchAllRestaurants = () => (dispatch) => {
    dispatch(loadRestaurants());

    return RestAPI.fetchAllRestaurants()
        .then( restaurants => dispatch(receiveAllRestaurants(restaurants)))
};

export const fetchRestaurant = (id) => (dispatch) => {
    dispatch(loadRestaurants());

    return RestAPI.fetchRestaurant(id)
        .then( 
            restaurant => dispatch(receiveRestaurant(restaurant))
        )
};


export const searchRestaurants = (keyword) => (dispatch) => (
    RestAPI.searchRestaurants(keyword)
        .then( searchResult => (dispatch(receiveAllRestaurants(searchResult))))
);