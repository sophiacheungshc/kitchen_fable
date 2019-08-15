import merge from 'lodash/merge';
import { RECEIVE_ALL_RES } from '../actions/reservation_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const ReviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_RESTAURANT:
            return action.payload.reviews;
        case RECEIVE_ALL_RES:
            return merge({}, action.payload.reviews);
        case RECEIVE_REVIEW:
            return merge({}, oldState, { [action.review.id]: action.review });
        case REMOVE_REVIEW:
            let newState = merge({}, oldState);
            delete newState[action.review.id];
            return newState;
        default:
            return oldState;
    }
};

export default ReviewsReducer;