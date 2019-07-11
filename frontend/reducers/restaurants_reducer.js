import { RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_FAV, DESTROY_FAV } from '../actions/favorite_actions';
import merge from 'lodash/merge';

const RestaurantsReducer  = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            return merge({}, action.restaurants);
        case RECEIVE_RESTAURANT:
            return merge({}, oldState, { [action.restaurant.id]: action.restaurant });
        case RECEIVE_FAV:
            return merge({}, oldState, { [action.favorite.id]: action.favorite });
        case DESTROY_FAV:
            return merge({}, oldState, { [action.favorite.id]: action.favorite });
        default:
            return oldState;
    }
};

export default RestaurantsReducer;