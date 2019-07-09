export const createReservation = (reservation) => (
    $.ajax({
        method: 'POST',
        url: 'api/reservations',
        data: { reservation }
    })
);

export const fetchAllReservations = (userId) => (
    $.ajax({
        method: 'GET',
        url: 'api/reservations',
        data: {userId}
    })
);
export const fetchReservation = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/reservations/${id}`
    })
);

export const deleteReservation = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/reservations/${id}`
    })
);