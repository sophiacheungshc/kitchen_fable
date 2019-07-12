import * as ReviewAPI from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

// export const receiveReviewErrors = errors => ({
//     type: RECEIVE_REVIEW_ERRORS,
//     errors
// });


export const createReview = review => dispatch => (
    ReviewAPI.createReview(review)
        .then((review) => dispatch(receiveReview(review)))
);

export const fetchReview = reviewId => dispatch => (
    ReviewAPI.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
);

export const fetchReviews = (restId) => dispatch => (
    ReviewAPI.fetchReviews(restId)
        .then(reviews => (dispatch(receiveReviews(reviews))))
);
