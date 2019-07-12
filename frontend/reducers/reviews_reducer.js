import merge from 'lodash/merge';

import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from '../actions/review_actions';


const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            return merge({}, state, { [action.review.id]: action.review });
        default:
            return state;
    }
};

export default ReviewsReducer;