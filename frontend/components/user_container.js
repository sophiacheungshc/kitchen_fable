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
    reviews: state.entities.reviews,
});

const mDP = (dispatch) => ({
    fetchAllRes: userId => dispatch(fetchAllRes(userId)),
    cancelRes: reservationId => dispatch(cancelRes(reservationId)),
    fetchFavs: id => dispatch(fetchFavs(id)),
    deleteFav: id => dispatch(deleteFav(id))
});

export default connect(mSP,mDP)(User);