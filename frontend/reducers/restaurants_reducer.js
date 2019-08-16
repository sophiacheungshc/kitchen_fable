import { RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_FAV, DESTROY_FAV } from '../actions/favorite_actions';
import merge from 'lodash/merge';

const RestaurantsReducer  = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            return merge({}, action.restaurants);
        case RECEIVE_RESTAURANT:
            return action.payload.restaurant;
        case RECEIVE_FAV:
            return merge({}, oldState, { userSaved: true });
        case DESTROY_FAV:
            return merge({}, oldState, { userSaved: false });
        default:
            return oldState;
    }
};

export default RestaurantsReducer;