import * as FavAPI from '../util/favorite_api_util';

export const RECEIVE_ALL_FAV = 'RECEIVE_ALL_FAV';
export const RECEIVE_FAV = 'RECEIVE_FAV';
export const DESTROY_FAV = 'DESTROY_FAV';

const receiveFavs = (favorites) => ({
    type: RECEIVE_ALL_FAV,
    favorites
});

const receiveFav = (favorite) => ({
    type: RECEIVE_FAV,
    favorite
});

const removeFav = (favorite) => ({
    type: DESTROY_FAV,
    favorite
});

export const createFav = (restId) => dispatch => (
    FavAPI.createFav(restId).then((fav) => dispatch(receiveFav(fav)))
);

export const fetchFav = (id) => (dispatch) => (
    FavAPI.fetchFav(id).then(fav => dispatch(receiveFav(fav)))
);

export const fetchFavs = (userId) => (dispatch) => (
    FavAPI.fetchFavs(userId).then(favs => dispatch(receiveFavs(favs)))
);

export const deleteFav = (restId) => (dispatch) => (
    FavAPI.deleteFav(restId).then(fav => dispatch(removeFav(fav)))
);

