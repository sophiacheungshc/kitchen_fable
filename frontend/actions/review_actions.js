import * as ReviewAPI from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const removeReview = (review) => ({
    type: REMOVE_REVIEW,
    review
});

export const createReview = (review) => dispatch => (
    ReviewAPI.createReview(review)
        .then((review) => dispatch(receiveReview(review)))
);

export const updateReview = (review) => dispatch => (
    ReviewAPI.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = (reviewId) => dispatch => (
    ReviewAPI.deleteReview(reviewId)
        .then(review => (dispatch(removeReview(review))))
);
