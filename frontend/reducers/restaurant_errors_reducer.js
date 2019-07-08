import { RECEIVE_RESTAURANT_ERRORS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';

const RestaurantErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESTAURANT_ERRORS:
            return action.errors;
        case RECEIVE_RESTAURANT:
            return [];
        default:
            return state;
    }
}

export default RestaurantErrorsReducer;