import { RECEIVE_ALL_RES } from '../actions/reservation_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const ReviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_RESTAURANT:
            return Object.assign({}, action.payload.reviews);
        case RECEIVE_ALL_RES:
            return Object.assign({}, action.payload.reviews);
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, { [action.review.id]: action.review });
        case REMOVE_REVIEW:
            let newState = Object.assign({}, oldState);
            delete newState[action.review.id];
            return newState;
        default:
            return oldState;
    }
};

export default ReviewsReducer;