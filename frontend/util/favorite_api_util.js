export const createFav = (restId) => (
    $.ajax({
        method: 'POST',
        url: '/api/favorites',
        data: { id: restId }
    })
);

export const fetchFavs = (userId) => (
    $.ajax({
        method: 'GET',
        url: '/api/favorites',
        data: { userId }
    })
);

export const fetchFav = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/favorites/${id}`
    })
);


export const deleteFav = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/favorites/${id}`
    })
);