import merge from 'lodash/merge';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';


const ReviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_RESTAURANT:
            // return merge({}, oldState, action.payload.reviews);
            return action.payload.reviews;
        default:
            return oldState;
    }
};

export default ReviewsReducer;