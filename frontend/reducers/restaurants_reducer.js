import { RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_FAV, DESTROY_FAV } from '../actions/favorite_actions';
import { RECEIVE_USER } from '../actions/session_actions';

const RestaurantsReducer  = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            return Object.assign({}, action.restaurants);
        case RECEIVE_RESTAURANT:
            return action.payload.restaurant;
        case RECEIVE_FAV:
            return Object.assign({}, oldState, { userSaved: true });
        case DESTROY_FAV:
            return Object.assign({}, oldState, { userSaved: false });
        case RECEIVE_USER:
            return Object.assign({}, action.payload.restaurants);
        default:
            return oldState;
    }
};

export default RestaurantsReducer;