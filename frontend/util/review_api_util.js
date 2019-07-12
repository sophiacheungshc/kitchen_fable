export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    })
);


export const fetchReview = reviewId => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews/${reviewId}`
    })
);


export const fetchReviews = (restId) => (
    $.ajax({
        method: 'GET',
        url: '/api/reviews',
        data: { restId }
    })
);
