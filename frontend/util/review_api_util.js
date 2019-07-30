export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    })
);

export const updateReview = review => (
    $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
);

export const deleteReview = review => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${review.id}`
    })
);
