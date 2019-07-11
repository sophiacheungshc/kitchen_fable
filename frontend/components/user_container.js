import { connect } from 'react-redux';
import User from './user';
import { fetchAllRes, cancelRes } from '../actions/reservation_actions';
import { fetchFavs, deleteFav } from '../actions/favorite_actions';

const mSP = (state) => ({
    currentUserId: state.session.id,
    reservations: Object.values(state.entities.reservations),
    // favs: Object.values(state.entities.favorites),
    restaurants: state.entities.restaurants,
    favorites: state.entities.favorites,
});

const mDP = (dispatch) => ({
    fetchAllRes: userId => dispatch(fetchAllRes(userId)),
    cancelRes: reservationId => dispatch(cancelRes(reservationId)),
    fetchFavs: id => dispatch(fetchFavs(id)),
    deleteFav: id => dispatch(deleteFav(id))
});

export default connect(mSP,mDP)(User);

// fetch user
// user show
// show json jbuilder

// user info
// fav restaurants + reserved restaurants
// favorites
// reservations

// receiveUser payload

// users, restaurants, favorites, resrvations

// action.payload.restaurants

// user container

// user: state.entities.users[state.session.id]
// restaurants: state.entities.restaurants
// favorites: Object.values(state.entities.favorites)
// reservations: Object.values(state.entities.resrvations)